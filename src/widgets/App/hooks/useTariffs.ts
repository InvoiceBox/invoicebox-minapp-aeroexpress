import { useEffect, useState } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TEvents } from './useEvents';
import { TTariff } from '../../../network/types';
import { TFetchTariffsRequest } from '../../../network/http';

export const useTariffs = (onError: TEvents['handleError'], fetchTariffs: TFetchTariffsRequest) => {
    const [tariffs, setTariffs] = useState<TTariff[]>([]);
    const [isTariffsInitialized, setInitializedFlag] = useState(false);
    const handleError = useUnupdatableHandler(onError);
    const handleFetchTariffs = useUnupdatableHandler(fetchTariffs);

    useEffect(() => {
        handleFetchTariffs()
            .then(setTariffs)
            .catch(() => handleError())
            .finally(() => setInitializedFlag(true));
    }, [handleError, handleFetchTariffs]);

    return { tariffs, isTariffsInitialized };
};
