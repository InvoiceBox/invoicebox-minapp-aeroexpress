import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IOrder } from 'src/store/Order/types';
import { dummyCurrency } from 'src/stories/_helpers/dummyCurrency';
import { DeleteDialog } from '.';

const meta: Meta<typeof DeleteDialog> = {
    title: 'miniApp/aeroexpress/widgets/DeleteDialog',
    component: DeleteDialog,
    tags: ['autodocs'],
};

export default meta;

type TPartlyOrder = Pick<IOrder, 'id' | 'description' | 'amount' | 'createdAt' | 'basketItems'>;
type TDummyOrder = Omit<TPartlyOrder, 'basketItems'> & { basketItems: any[] };

const dummyOrders: TDummyOrder[] = [
    {
        id: '018d4039-9a8f-5a81-2e14-165a9c1664e8',
        description: 'Оказание услуг тестового ИТВ ',
        amount: 183.01,
        basketItems: [null, null],
        createdAt: '2024-01-25T10:45:33+00:00',
    },
    {
        id: '018d4039-9a50-7c67-6626-29cb1dbdea20',
        description: 'Оплата номера в отеле',
        amount: 6100.37,
        basketItems: [null],
        createdAt: '2024-01-25T10:45:33+00:00',
    },
];

export const Default: StoryObj<typeof DeleteDialog> = {
    args: {
        isOpen: false,
        orders: dummyOrders as unknown as IOrder[],
        currency: dummyCurrency,
        onClose: action('close'),
        onDelete: action('delete'),
    },
};
