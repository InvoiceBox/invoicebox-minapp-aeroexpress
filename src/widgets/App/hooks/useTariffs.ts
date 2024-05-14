import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TEvents } from './useEvents';
import { fetchTariffsRequest } from '../../../network/http';
import { TTariff } from '../../../network/types';

export const useTariffs = (onError: TEvents['handleError']) => {
    const [tariffs, setTariffs] = useState<TTariff[]>([]);
    const [isTariffsInitialized, setInitializedFlag] = useState(false);
    const handleError = useUnupdatableHandler(onError);

    useEffect(() => {
        fetchTariffsRequest()
            .then((resp) => setTariffs(resp.data.filter((tariff) => tariff.active)))
            .catch(() => handleError())
            .finally(() => setInitializedFlag(true));
    }, [handleError]);

    return { tariffs, isTariffsInitialized };
};
