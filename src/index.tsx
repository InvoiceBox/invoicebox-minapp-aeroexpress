import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from '@invoicebox/ui';
import { App } from './widgets/App';
import { createOrderRequest, fetchTariffsRequest } from './network/http';
import { AppErrorBoundary } from './components/AppErrorBoundary';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <AppErrorBoundary>
            <ToastContainer />
            <App fetchTariffs={fetchTariffsRequest} createOrder={createOrderRequest} />
        </AppErrorBoundary>
    </React.StrictMode>,
);
