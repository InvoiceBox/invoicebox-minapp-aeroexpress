import React, { FC } from 'react';
import { useTariffs } from './hooks/useTariffs';
import { useConnection } from './hooks/useConnection';
import { useInitialData } from './hooks/useInitialData';
import { useEvents } from './hooks/useEvents';
import { AppInner } from './components/AppInner';
import { Loader } from '../../components/Loader';
import { TFetchTariffsRequest } from '../../network/http';

export type TProps = {
    fetchTariffs: TFetchTariffsRequest;
};

export const App: FC<TProps> = ({ fetchTariffs }) => {
    useConnection();
    const events = useEvents();
    const { handleError } = events;
    const initialData = useInitialData();
    const { tariffs, isTariffsInitialized } = useTariffs(handleError, fetchTariffs);

    if (!isTariffsInitialized || !initialData) return <Loader />;

    return <AppInner events={events} initialData={initialData} tariffs={tariffs} />;
};
