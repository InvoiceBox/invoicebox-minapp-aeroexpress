import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { TTariff } from '../../../network/types';
import { fetchTariffsRequest } from '../../../network/http';

export const useTariffs = () => {
    const intl = useIntl();

    const [tariffs, setTariffs] = useState<TTariff[]>([]);
    const [isInitialized, setInitializedFlag] = useState(false);

    useEffect(() => {
        fetchTariffsRequest()
            .then((resp) => setTariffs(resp.data.filter((tariff) => tariff.active)))
            .catch(() => {
                // TODO
            })
            .finally(() => setInitializedFlag(true));
    }, [intl]);

    return { tariffs, isInitialized };
};
