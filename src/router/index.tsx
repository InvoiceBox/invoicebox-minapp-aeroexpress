import { createBrowserRouter } from 'react-router-dom';
import { App } from '../widgets/App';
import { createOrderRequest, fetchTariffsRequest } from '../network/http';
import { LoadableTariffs } from '../widgets/LoadableTariffs';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <App fetchTariffs={fetchTariffsRequest} createOrder={createOrderRequest} />,
    },
    {
        path: ROUTES.tariffs,
        element: <LoadableTariffs fetchTariffs={fetchTariffsRequest} />,
    },
]);
