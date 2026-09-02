import React, { FC, MouseEvent, useCallback, useMemo, useState } from 'react';
import { PointsLoader } from '@invoicebox/ui';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { TInitialData } from '../../hooks/useInitialData';
import { useHeight } from './hooks/useHeight';
import { useSuborderFlag } from './hooks/useSuborderFlag';
import { useAirportCheck } from './hooks/useAirportCheck';
import * as S from './styles';
import { TUseEventsResult } from '../../hooks/useEvents';
import { TTariff } from '../../../../network/types';
import { Form } from '../../../../components/Form';
import { TCreateOrderRequest } from '../../../../network/http';
import { TARIFFS_PAGE_PATH } from '../../../../paths';
import { envLogic } from '../../../../network/envLogic';
import { DebugPaymentResultSwitcher } from '../../../../components/DebugPaymentResultSwitcher';
import { TOutterForm } from '../../../../components/Form/types';
import { PaymentResult } from '../../../../components/PaymentResult';

export type TProps = {
    initialData: TInitialData;
    tariffs: TTariff[];
    events: TUseEventsResult;
    createOrder: TCreateOrderRequest;
    onDemoStatusChange: (status: TPaymentStatus | null) => void;
};

export const AppInner: FC<TProps> = ({ initialData, tariffs, events, createOrder, onDemoStatusChange }) => {
    const { handlers, paymentStatus, resetPaymentStatus } = events;
    const {
        handleUnavailable,
        handleLink: onLink,
        handleCheckout,
        handleError,
        handleHeightChange,
    } = handlers;
    const setHeightElRef = useHeight(initialData.fullHeight, handleHeightChange);
    const isSuborder = useSuborderFlag(initialData);

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
            } catch (error) {
                handleError(error instanceof Error ? error.message : undefined);
            } finally {
                setIsCreatingOrder(false);
            }
        },
        [initialData, createOrder, handleCheckout, handleError],
    );

    const handleLink = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            if (href) onLink(href);
        },
        [onLink],
    );

    const formKey = useMemo(() => tariffs.map(({ id }) => id).join(''), [tariffs]);

    if (isCreatingOrder) {
        return (
            <S.LoaderContainer>
                <PointsLoader />
                <S.LoadingStatus variant="headline4">Оформляем билет...</S.LoadingStatus>
            </S.LoaderContainer>
        );
    }

    if (paymentStatus) {
        return (
            <S.Wrapper $fullHeight={initialData.fullHeight} ref={setHeightElRef}>
                <PaymentResult status={paymentStatus} onRetry={resetPaymentStatus} />
            </S.Wrapper>
        );
    }

    return (
        <S.Wrapper $fullHeight={initialData.fullHeight} ref={setHeightElRef}>
            {process.env.NODE_ENV === 'development' && (
                <DebugPaymentResultSwitcher onDemoStatusChange={onDemoStatusChange} />
            )}
            <Form
                key={formKey}
                onSubmit={handleSubmit}
                initialTariffs={tariffs}
                onLink={handleLink}
                tariffsHref={envLogic.appendCurrentOrigin(TARIFFS_PAGE_PATH)}
                buttonText={isSuborder ? 'Добавить в счёт' : 'Купить билет'}
            />
        </S.Wrapper>
    );
};
