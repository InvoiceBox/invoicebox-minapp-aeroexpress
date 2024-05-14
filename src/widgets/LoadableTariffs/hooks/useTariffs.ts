import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
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
                toast.error(
                    intl.formatMessage({
                        id: 'DyvgAq',
                        defaultMessage:
                            'Произошла ошибка в работе сервиса. Пожалуйста, повторите попытку или обновите страницу.',
                    }),
                );
            })
            .finally(() => setInitializedFlag(true));
    }, [intl]);

    return { tariffs, isInitialized };
};
