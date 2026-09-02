import React from 'react';
import ReactDOM from 'react-dom/client';
import { PaletteProvider, ToastContainer, defaultAbstractPalette } from '@invoicebox/ui';
import { App } from './widgets/App';
import { createOrderRequest, fetchTariffsRequest } from './network/http';
import { AppErrorBoundary } from './components/AppErrorBoundary';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <AppErrorBoundary>
            {/* Без PaletteProvider компоненты ui-кита остаются без палитры:
                рамки инпутов прозрачные и т.п. (кит с alpha.9x читает цвета из контекста). */}
            <PaletteProvider abstract={defaultAbstractPalette}>
                <ToastContainer />
                <App fetchTariffs={fetchTariffsRequest} createOrder={createOrderRequest} />
            </PaletteProvider>
        </AppErrorBoundary>
    </React.StrictMode>,
);
