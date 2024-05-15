import React, { FC, MouseEvent, useCallback, useMemo } from 'react';
import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';
import { TInitialData } from '../../hooks/useInitialData';
import { useHeight } from './hooks/useHeight';
import { useSuborderFlag } from './hooks/useSuborderFlag';
import { useAirportCheck } from './hooks/useAirportCheck';
import { useSubmitHandler } from './hooks/useSubmitHandler';
import * as S from './styles';
import { TEvents } from '../../hooks/useEvents';
import { envLogic } from '../../../../network/envLogic';
import { TTariff } from '../../../../network/types';
import { Form } from '../../../../components/Form';

export type TProps = {
    initialData: TInitialData;
    tariffs: TTariff[];
    events: TEvents;
};

export const AppInner: FC<TProps> = ({ initialData, tariffs, events }) => {
    const { handleError, handleHeightChange, handleUnavailable, handleDone, handleLink: onLink } = events;
    const setHeightElRef = useHeight(initialData.fullHeight, handleHeightChange);
    const isSuborder = useSuborderFlag(initialData);
    useAirportCheck(handleUnavailable, isSuborder);
    const handleSubmit = useSubmitHandler(initialData, handleDone, handleError);

    const handleLink = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const { currentTarget } = event;
            onLink(currentTarget.getAttribute('href') as string);
        },
        [onLink],
    );

    const formKey = useMemo(() => tariffs.map(({ id }) => id).join(''), [tariffs]);

    return (
        <S.Wrapper ref={setHeightElRef}>
            <Form
                key={formKey}
                onSubmit={handleSubmit}
                initialTariffs={tariffs}
                onLink={handleLink}
                tariffsHref={envLogic.appendEnv(
                    // DOTO
                    `${invoiceboxMinapp.getParentOrigin()}/aeroexpressTariffs`,
                )}
                buttonText={isSuborder ? 'Добавить в заказ' : 'Купить билет'}
            />
        </S.Wrapper>
    );
};
