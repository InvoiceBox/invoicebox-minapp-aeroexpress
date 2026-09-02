import React, { FC, useEffect, useState } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { useTariffs } from './hooks/useTariffs';
import { useConnection } from './hooks/useConnection';
import { useEvents } from './hooks/useEvents';
import { AppInner } from './components/AppInner';
import { Loader } from '../../components/Loader';
import { InitErrorScreen } from '../../components/InitErrorScreen';
import { TCreateOrderRequest, TFetchTariffsRequest } from '../../network/http';
import { useInitialData } from './hooks/useInitialData';

export type TProps = {
    fetchTariffs: TFetchTariffsRequest;
    createOrder: TCreateOrderRequest;
};

export const App: FC<TProps> = ({ fetchTariffs, createOrder }) => {
    useConnection();
    const [demoStatus, setDemoStatus] = useState<TPaymentStatus | null>(null);
    const events = useEvents(demoStatus);
    const {
        handlers: { handleError },
    } = events;
    const initialDataState = useInitialData();
    const { tariffs, isTariffsInitialized } = useTariffs(handleError, fetchTariffs);

    const isInitFailed = initialDataState.status === 'error';
    useEffect(() => {
        if (isInitFailed) handleError();
    }, [isInitFailed, handleError]);

    if (isInitFailed) return <InitErrorScreen />;
    if (!isTariffsInitialized || initialDataState.status === 'loading') return <Loader />;

    return (
        <AppInner
            events={events}
            initialData={initialDataState.data}
            tariffs={tariffs}
            createOrder={createOrder}
            onDemoStatusChange={setDemoStatus}
        />
    );
};
