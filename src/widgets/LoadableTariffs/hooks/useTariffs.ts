import { useEffect, useState } from 'react';
import { TTariff } from '../../../network/types';
import { useUnupdatableHandler } from '@invoicebox/ui';

type TProps = {
    fetchTariffs: () => Promise<TTariff[]>;
};

export const useTariffs = ({ fetchTariffs }: TProps) => {
    const [tariffs, setTariffs] = useState<TTariff[]>([]);
    const [isInitialized, setInitializedFlag] = useState(false);

    const handleFetchTariffs = useUnupdatableHandler(fetchTariffs);

    useEffect(() => {
        handleFetchTariffs()
            .then((tariffs) => setTariffs(tariffs.filter((tariff) => tariff.active)))
            .catch(() => {
                // TODO
            })
            .finally(() => setInitializedFlag(true));
    }, [handleFetchTariffs]);

    return { tariffs, isInitialized };
};
