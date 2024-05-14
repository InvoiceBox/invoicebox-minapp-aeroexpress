import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';

const getHandler = <THandler extends (...props: any[]) => void>(handler: THandler) => {
    const newHandler = (...props: any[]) => {
        if (invoiceboxMinapp.isConnected()) handler(...props);
    };
    return newHandler as THandler;
};

const handlers = {
    handleError: getHandler(invoiceboxMinapp.onError.bind(invoiceboxMinapp)),
    handleHeightChange: getHandler(invoiceboxMinapp.onHeightChange.bind(invoiceboxMinapp)),
    handleUnavailable: getHandler(invoiceboxMinapp.onUnavailable.bind(invoiceboxMinapp)),
    handleDone: getHandler(invoiceboxMinapp.onDone.bind(invoiceboxMinapp)),
    handleLink: getHandler(invoiceboxMinapp.onLink.bind(invoiceboxMinapp)),
};

export type TEvents = typeof handlers;

export const useEvents = () => handlers;
