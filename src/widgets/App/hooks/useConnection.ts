import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';
import { useCallback, useEffect } from 'react';

export const useConnection = () => {
    const connect = useCallback(() => {
        if (invoiceboxMinapp.isConnected()) return;
        invoiceboxMinapp.connect();
    }, []);

    useEffect(() => {
        connect();
        return () => {
            invoiceboxMinapp.disconnect();
        };
    }, [connect]);
};
