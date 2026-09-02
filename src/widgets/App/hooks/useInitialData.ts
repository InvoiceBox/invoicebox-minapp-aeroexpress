import { useEffect, useState } from 'react';
import { getMinapp } from '../../../minappClient';

export type TInitialData = Awaited<ReturnType<ReturnType<typeof getMinapp>['getInitialData']>>;

export type TInitialDataState =
    { status: 'loading' } | { status: 'ready'; data: TInitialData } | { status: 'error' };

export const useInitialData = (): TInitialDataState => {
    const [state, setState] = useState<TInitialDataState>({ status: 'loading' });

    useEffect(() => {
        let isCancelled = false;
        const minapp = getMinapp();

        minapp
            .getInitialData()
            .then((data) => {
                if (!isCancelled) setState({ status: 'ready', data });
            })
            .catch(() => {
                // хост не ответил за таймаут SDK — показываем ошибку вместо вечного лоадера
                if (!isCancelled) setState({ status: 'error' });
            });

        // протокол v2: хост может прислать обновлённые данные (пользователь изменил email/имя/телефон)
        const unsubscribe = minapp.onDataUpdate((data) => setState({ status: 'ready', data }));

        return () => {
            isCancelled = true;
            unsubscribe();
        };
    }, []);

    return state;
};
