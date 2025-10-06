import React, { FC, useState } from 'react';
import { useTariffs } from './hooks/useTariffs';
import { useConnection } from './hooks/useConnection';
import { useEvents } from './hooks/useEvents';
import { AppInner } from './components/AppInner';
import { Loader } from '../../components/Loader';
import { TCreateOrderRequest, TFetchTariffsRequest } from '../../network/http';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { useInitialData } from './hooks/useInitialData';

export type TProps = {
    fetchTariffs: TFetchTariffsRequest;
    createOrder: TCreateOrderRequest;
};



export const App: FC<TProps> = ({ fetchTariffs, createOrder }) => {
    useConnection();
    const [demoStatus, setDemoStatus] = useState<TPaymentStatus | null>(null);
    const events = useEvents(demoStatus);
    const { handlers: {handleError} } = events;
    const initialData = useInitialData();
    const { tariffs, isTariffsInitialized } = useTariffs(handleError, fetchTariffs);

    if (!isTariffsInitialized || !initialData) return <Loader />;

    return (
        <AppInner
            events={events}
            initialData={initialData}
            tariffs={tariffs}
            createOrder={createOrder}
            onDemoStatusChange={setDemoStatus}
        />
    );
};
