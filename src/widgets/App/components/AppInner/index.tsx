import React, { FC, MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { TInitialData } from '../../hooks/useInitialData';
import { useHeight } from './hooks/useHeight';
import { useSuborderFlag } from './hooks/useSuborderFlag';
import { useAirportCheck } from './hooks/useAirportCheck';
import * as S from './styles';
import { TUseEventsResult } from '../../hooks/useEvents';
import { TTariff } from '../../../../network/types';
import { Form } from '../../../../components/Form';
import { TCreateOrderRequest } from '../../../../network/http';
import { ROUTES } from '../../../../router/routes';
import { envLogic } from '../../../../network/envLogic';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { DebugPaymentResultSwitcher } from '../../../../components/DebugPaymentResultSwitcher';
import { TOutterForm } from '../../../../components/Form/types';
import { InvoiceboxLoader } from '@invoicebox/ui';
import { useNavigate } from 'react-router-dom';

export type TProps = {
    initialData: TInitialData;
    tariffs: TTariff[];
    events: TUseEventsResult;
    createOrder: TCreateOrderRequest;
    onDemoStatusChange: (status: TPaymentStatus | null) => void;
};

export const AppInner: FC<TProps> = ({ initialData, tariffs, events, createOrder, onDemoStatusChange }) => {
    const { handlers } = events;
    const {
        handleUnavailable,
        handleLink: onLink,
        handleCheckout,
        handleError,
        handleHeightChange,
    } = handlers;
    const setHeightElRef = useHeight(initialData.fullHeight, handleHeightChange);
    const isSuborder = useSuborderFlag(initialData);
    const navigate = useNavigate();

    const [isCreatingOrder, setIsCreatingOrder] = useState(false);

    useAirportCheck(handleUnavailable, isSuborder);

    const handleSubmit = useCallback(
        async (form: TOutterForm) => {
            setIsCreatingOrder(true);
            const { orderContainerId, userName, userEmail, userPhone } = initialData;

            try {
                const response = await createOrder({
                    ...form,
                    orderContainerId,
                    firstName: userName,
                    email: userEmail,
                    phone: userPhone,
                });
                handleCheckout(response.url);
            } catch (error: any) {
                handleError(error.message);
            } finally {
                setIsCreatingOrder(false);
            }
        },
        [initialData, createOrder, handleCheckout, handleError],
    );

    const handleLink = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const { currentTarget } = event;
            onLink(currentTarget.getAttribute('href') as string);
        },
        [onLink],
    );

    useEffect(() => {
        if (events.paymentStatus) {
            const status = events.paymentStatus;
            events.resetPaymentStatus();
            navigate(ROUTES.paymentResult, {
                state: { paymentStatus: status },
            });
        }
    }, [navigate, events]);

    const formKey = useMemo(() => tariffs.map(({ id }) => id).join(''), [tariffs]);

    if (isCreatingOrder) {
        return (
            <S.LoaderContainer>
                <InvoiceboxLoader width="120px" />
                <S.LoadingStatus variant="headline4">Оформляем билет...</S.LoadingStatus>
            </S.LoaderContainer>
        );
    }

    return (
        <S.Wrapper ref={setHeightElRef}>
            {process.env.NODE_ENV === 'development' && (
                <DebugPaymentResultSwitcher onDemoStatusChange={onDemoStatusChange} />
            )}
            <Form
                key={formKey}
                onSubmit={handleSubmit}
                initialTariffs={tariffs}
                onLink={handleLink}
                tariffsHref={envLogic.appendCurrentOrigin(ROUTES.tariffs)}
                buttonText={isSuborder ? 'Добавить в заказ' : 'Купить билет'}
            />
        </S.Wrapper>
    );
};
