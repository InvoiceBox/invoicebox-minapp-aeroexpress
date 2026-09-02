import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoadableTariffs } from './widgets/LoadableTariffs';
import { fetchTariffsRequest } from './network/http';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <LoadableTariffs fetchTariffs={fetchTariffsRequest} />
    </React.StrictMode>,
);
