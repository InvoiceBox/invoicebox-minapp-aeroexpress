import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TEvents } from '../../../hooks/useEvents';

// Поповеры ui-кита (дропдаун селекта, календарь) — fixed-слои в body: в iframe они
// обрезаются нижней границей, т.к. высота iframe = высоте контента. Учитываем их
// нижний край в сообщаемой хосту высоте, пока поповер открыт.
const getFixedLayersBottom = (contentEl: HTMLElement): number => {
    const bottoms = Array.from(document.body.children)
        .filter((el): el is HTMLElement => el instanceof HTMLElement && !el.contains(contentEl))
        .filter((el) => getComputedStyle(el).position === 'fixed')
        .map((el) => el.getBoundingClientRect().bottom);
    return Math.max(0, ...bottoms);
};

const POPOVER_EXTRA_SPACE_PX = 16;

// В suborder-режиме (iframe) сообщаем хосту фактическую высоту контента.
// В fullHeight-режиме (WebView) высотой управляет CSS (см. styles + index.css),
// сообщения о высоте не нужны.
export const useHeight = (fullHeight: boolean, onHeightChange: TEvents['handleHeightChange']) => {
    const [elRef, setElRef] = useState<HTMLDivElement | null>(null);
    const handleHeightChange = useUnupdatableHandler(onHeightChange);

    useEffect(() => {
        if (!elRef || fullHeight) return undefined;

        let isScheduled = false;
        const notify = () => {
            if (isScheduled) return;
            isScheduled = true;
            requestAnimationFrame(() => {
                isScheduled = false;
                const layersBottom = getFixedLayersBottom(elRef);
                const popoverHeight = layersBottom > 0 ? layersBottom + POPOVER_EXTRA_SPACE_PX : 0;
                handleHeightChange(Math.max(elRef.offsetHeight, Math.ceil(popoverHeight)));
            });
        };

        const resizeObserver = new ResizeObserver(notify);
        resizeObserver.observe(elRef);

        // Открытие/закрытие поповеров = добавление/удаление fixed-слоёв в body;
        // их содержимое может дорисовываться асинхронно — пересчитываем и на subtree.
        const mutationObserver = new MutationObserver(notify);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, [elRef, handleHeightChange, fullHeight]);

    return setElRef;
};
