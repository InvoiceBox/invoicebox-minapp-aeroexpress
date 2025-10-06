import { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaymentResult } from '../PaymentResult';
import { ROUTES } from '../../router/routes';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';

type TLocationState = {
    paymentStatus: TPaymentStatus;
};

export const PaymentResultPage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as TLocationState | null;
    const paymentStatus = state?.paymentStatus;

    const handleRetry = useCallback(() => {
        navigate(ROUTES.root);
    }, [navigate]);

    if (!paymentStatus) {
        navigate(ROUTES.root);
        return null;
    }

    return <PaymentResult status={paymentStatus} onRetry={handleRetry} />;
};
