import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';
import { useEffect } from 'react';
import { useUnupdatableHandler } from 'src/hooks/useUnupdatableHandler';
import { TEvents } from '../../../hooks/useEvents';

const MOSKOW_AIRPORTS = ['VKO', 'DME', 'SVO'];
const AIRPORT_KEY = 'iataCode';

export const useAirportCheck = (onUnavailable: TEvents['handleUnavailable'], isSuborder: boolean) => {
    const handleUnavailable = useUnupdatableHandler(onUnavailable);

    useEffect(() => {
        if (!isSuborder) return;
        invoiceboxMinapp
            .matchMetaDataValues(AIRPORT_KEY, MOSKOW_AIRPORTS)
            .then((isMatch) => {
                if (!isMatch) handleUnavailable();
            })
            .catch(() => {});
    }, [isSuborder, handleUnavailable]);
};
