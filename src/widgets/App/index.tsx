import React, { FC } from 'react';
import { useTariffs } from './hooks/useTariffs';
import { useConnection } from './hooks/useConnection';
import { useInitialData } from './hooks/useInitialData';
import { useEvents } from './hooks/useEvents';
import { AppInner } from './components/AppInner';
import { Loader } from '../../components/Loader';

export type TProps = {};

export const App: FC<TProps> = () => {
    useConnection();
    const events = useEvents();
    const { handleError } = events;
    const initialData = useInitialData();
    const { tariffs, isTariffsInitialized } = useTariffs(handleError);

    if (!isTariffsInitialized || !initialData) return <Loader />;

    return <AppInner events={events} initialData={initialData} tariffs={tariffs} />;
};
