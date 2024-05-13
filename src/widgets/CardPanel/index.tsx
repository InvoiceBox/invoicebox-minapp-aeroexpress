import React, { FC, useMemo } from 'react';
import { IOrder } from 'src/store/Order/types';
import { getOrdersCountLabel } from 'src/utils/formatters';
import { useIntl } from 'react-intl';
import { orderLogic } from 'src/store/Order/orderLogic';
import { ICurrency } from 'src/store/Currency/types';
import { CardPanel as CardPanelComponent, TProps as TCardPanelComponentProps } from '../../components/CardPanel';

type TProps = Omit<TCardPanelComponentProps, 'amount' | 'count'> & {
    orders: IOrder[];
    currency: ICurrency;
};

export const CardPanel: FC<TProps> = ({ orders, currency, ...rest }) => {
    const intl = useIntl();

    const count = useMemo(() => getOrdersCountLabel(orders.length, intl), [intl, orders]);

    const amount = useMemo(() => orderLogic.getOrdersAmount(orders, currency), [orders, currency]);

    return <CardPanelComponent {...rest} amount={amount} count={count} />;
};
