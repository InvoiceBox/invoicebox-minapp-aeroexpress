import { useEffect, useState } from 'react';
import { TTariff } from '../../../network/types';
import { toast, useUnupdatableHandler } from '@invoicebox/ui';
import { TFetchTariffsRequest } from '../../../network/http';

type TProps = {
    fetchTariffs: TFetchTariffsRequest;
};

export const useTariffs = ({ fetchTariffs }: TProps) => {
    const [tariffs, setTariffs] = useState<TTariff[]>([]);
    const [isInitialized, setInitializedFlag] = useState(false);

    const handleFetchTariffs = useUnupdatableHandler(fetchTariffs);

    useEffect(() => {
        handleFetchTariffs()
            .then(setTariffs)
            .catch(() => {
                toast.error(
                    'Произошла ошибка в работе сервиса. Пожалуйста, повторите попытку или обновите страницу.',
                );
            })
            .finally(() => setInitializedFlag(true));
    }, [handleFetchTariffs]);

    return { tariffs, isInitialized };
};
