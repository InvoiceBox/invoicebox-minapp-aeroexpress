import { invoiceboxMinapp, TPaymentStatus } from '@invoicebox/minapp-sdk';
import { useState } from 'react';

const getHandler = <THandler extends (...props: any[]) => void>(handler: THandler) => {
    const newHandler = (...props: any[]) => {
        if (invoiceboxMinapp.isConnected()) handler(...props);
    };
    return newHandler as THandler;
};

const getHandlers = (demoStatus?: TPaymentStatus | null) => ({
    handleError: getHandler(invoiceboxMinapp.onError.bind(invoiceboxMinapp)),
    handleHeightChange: getHandler(invoiceboxMinapp.onHeightChange.bind(invoiceboxMinapp)),
    handleUnavailable: getHandler(invoiceboxMinapp.onUnavailable.bind(invoiceboxMinapp)),
    handleDone: getHandler(invoiceboxMinapp.onDone.bind(invoiceboxMinapp)),
    handleCheckout: getHandler(invoiceboxMinapp.onCheckout.bind(invoiceboxMinapp)),
    handleLink: getHandler(invoiceboxMinapp.onLink.bind(invoiceboxMinapp)),
    handlePaymentResult: getHandler((callback: (status: TPaymentStatus) => void) => {
        invoiceboxMinapp.onPaymentResult((status: TPaymentStatus) => {
            callback(demoStatus ?? status);
        });
    }),
});

export type TEvents = ReturnType<typeof getHandlers>;
export type TUseEventsResult = ReturnType<typeof useEvents>;

export const useEvents = (demoStatus?: TPaymentStatus | null) => {
    const [paymentStatus, setPaymentStatus] = useState<TPaymentStatus | null>(null);

    const resetPaymentStatus = () => setPaymentStatus(null);

    const handlers = getHandlers(demoStatus);
    handlers.handlePaymentResult(setPaymentStatus);

    return { handlers, paymentStatus, resetPaymentStatus };
};
