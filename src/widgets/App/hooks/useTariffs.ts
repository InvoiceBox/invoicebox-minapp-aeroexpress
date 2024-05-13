import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from 'src/hooks/useUnupdatableHandler';
import { fetchTariffsRequest } from 'src/store/Aeroexpress/http';
import { TTariff } from 'src/store/Aeroexpress/types';
import { TEvents } from './useEvents';

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
