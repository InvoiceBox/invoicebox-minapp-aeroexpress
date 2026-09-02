import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TEvents } from '../../../hooks/useEvents';

// В suborder-режиме (iframe) сообщаем хосту фактическую высоту контента.
// В fullHeight-режиме (WebView) высотой управляет CSS (см. styles + index.css),
// сообщения о высоте не нужны.
export const useHeight = (fullHeight: boolean, onHeightChange: TEvents['handleHeightChange']) => {
    const [elRef, setElRef] = useState<HTMLDivElement | null>(null);
    const handleHeightChange = useUnupdatableHandler(onHeightChange);

    useEffect(() => {
        if (!elRef || fullHeight) return undefined;
        const observer = new ResizeObserver(() => {
            handleHeightChange(elRef.offsetHeight);
        });
        observer.observe(elRef);
        return () => observer.disconnect();
    }, [elRef, handleHeightChange, fullHeight]);

    return setElRef;
};
