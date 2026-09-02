import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getMinapp } from '../../../minappClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const guard = <THandler extends (...args: any[]) => void>(handler: THandler): THandler => {
    const guarded = (...args: unknown[]) => {
        if (getMinapp().isConnected()) handler(...args);
    };
    return guarded as THandler;
};

export type TUseEventsResult = ReturnType<typeof useEvents>;
export type TEvents = TUseEventsResult['handlers'];

export const useEvents = (demoStatus?: TPaymentStatus | null) => {
    const [paymentStatus, setPaymentStatus] = useState<TPaymentStatus | null>(null);
    const resetPaymentStatus = useCallback(() => setPaymentStatus(null), []);

    const demoStatusRef = useRef<TPaymentStatus | null>(demoStatus ?? null);
    useEffect(() => {
        demoStatusRef.current = demoStatus ?? null;
    }, [demoStatus]);

    const handlers = useMemo(() => {
        const minapp = getMinapp();
        return {
            handleError: guard((message?: string) => minapp.onError(message)),
            handleHeightChange: guard((height: number) => minapp.onHeightChange(height)),
            handleUnavailable: guard(() => minapp.onUnavailable()),
            handleDone: guard((paymentUrl?: string | null) => minapp.onDone(paymentUrl)),
            handleCheckout: guard((paymentUrl: string) => minapp.onCheckout(paymentUrl)),
            handleLink: guard((href: string) => minapp.onLink(href)),
        };
    }, []);

    useEffect(
        () =>
            getMinapp().onPaymentResult((status) => {
                setPaymentStatus(demoStatusRef.current ?? status);
            }),
        [],
    );

    return { handlers, paymentStatus, resetPaymentStatus };
};
