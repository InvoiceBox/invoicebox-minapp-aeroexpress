import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from 'src/hooks/useUnupdatableHandler';
import { TEvents } from '../../../hooks/useEvents';

export const useHeight = (fullHeight: boolean, onHeightChange: TEvents['handleHeightChange']) => {
    const [elRef, setElRef] = useState<HTMLDivElement | null>(null);
    const handleHeightChange = useUnupdatableHandler(onHeightChange);

    useEffect(() => {
        if (!elRef) return;
        if (fullHeight) return;
        const observer = new ResizeObserver(() => {
            handleHeightChange(elRef.offsetHeight);
        });
        observer.observe(elRef);
        return () => observer.disconnect();
    }, [elRef, handleHeightChange, fullHeight]);

    useEffect(() => {
        if (!elRef) return;
        if (!fullHeight) return;
        const resets: (() => void)[] = [];
        let currentElement: HTMLElement | null = elRef;
        while (currentElement) {
            const element: HTMLElement = currentElement;
            const { height } = element.style;
            resets.push(() => {
                element.style.height = height;
            });
            element.style.height = '100%';
            currentElement = element.parentElement;
        }
        return () => resets.forEach((reset) => reset());
    }, [elRef, fullHeight]);

    return setElRef;
};
