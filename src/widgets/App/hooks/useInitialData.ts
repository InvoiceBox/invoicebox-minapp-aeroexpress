import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';
import { useEffect, useState } from 'react';

export type TInitialData = Awaited<ReturnType<typeof invoiceboxMinapp.getInitialData>>;

export const useInitialData = () => {
    const [initialData, setInitialData] = useState<TInitialData | null>(null);

    useEffect(() => {
        invoiceboxMinapp
            .getInitialData()
            .then((resp) => setInitialData(resp))
            .catch(() => {});
    }, []);

    return initialData;
};
