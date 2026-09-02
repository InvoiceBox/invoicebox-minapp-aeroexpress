import React from 'react';
import ReactDOM from 'react-dom/client';
import { PaletteProvider, defaultAbstractPalette } from '@invoicebox/ui';
import { LoadableTariffs } from './widgets/LoadableTariffs';
import { fetchTariffsRequest } from './network/http';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <PaletteProvider abstract={defaultAbstractPalette}>
            <LoadableTariffs fetchTariffs={fetchTariffsRequest} />
        </PaletteProvider>
    </React.StrictMode>,
);
