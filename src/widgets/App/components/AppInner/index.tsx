import React, { FC, MouseEvent, useCallback, useMemo } from 'react';
import { ROUTES } from 'src/utils/routes';
import { aeroexpressLogic } from 'src/store/Aeroexpress/logic';
import { invoiceboxMinapp } from '@invoicebox/minapp-sdk';
import { TTariff } from 'src/store/Aeroexpress/types';
import { Form } from 'src/stories/miniApps/aeroexpress/components/Form';
import { TInitialData } from '../../hooks/useInitialData';
import { useHeight } from './hooks/useHeight';
import { useSuborderFlag } from './hooks/useSuborderFlag';
import { useAirportCheck } from './hooks/useAirportCheck';
import { useSubmitHandler } from './hooks/useSubmitHandler';
import * as S from './styles';
import { TEvents } from '../../hooks/useEvents';

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
                tariffsHref={aeroexpressLogic.appendEnv(
                    `${invoiceboxMinapp.getParentOrigin()}/${ROUTES.aeroexpressTariffs}`,
                )}
                buttonText={isSuborder ? 'Добавить в заказ' : 'Купить билет'}
            />
        </S.Wrapper>
    );
};
