import React, { FC, useMemo } from 'react';
import { IOrder } from 'src/store/Order/types';
import { currencyFormatter, dateFormatter, getBasketItemsCountLabel } from 'src/utils/formatters';
import { useIntl } from 'react-intl';
import { ICurrency } from 'src/store/Currency/types';
import {
    DeleteDialog as DeleteDialogComponet,
    TProps as TDeleteDialogComponentProps,
} from '../../components/DeleteDialog';

export type TProps = Omit<TDeleteDialogComponentProps, 'items'> & {
    orders: IOrder[];
    currency: ICurrency;
};

export const DeleteDialog: FC<TProps> = ({ orders, currency, ...rest }) => {
    const intl = useIntl();

    const normalizedItems = useMemo(
        () =>
            orders.map(({ id, description, basketItems, amount, createdAt }) => ({
                id,
                title: description,
                count: getBasketItemsCountLabel(basketItems.length, intl),
                date: dateFormatter(createdAt),
                amount: currencyFormatter(amount, currency),
            })),
        [orders, intl, currency],
    );

    return <DeleteDialogComponet {...rest} items={normalizedItems} />;
};
