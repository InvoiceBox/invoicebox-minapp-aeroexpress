import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IOrder } from 'src/store/Order/types';
import { dummyCurrency } from 'src/stories/_helpers/dummyCurrency';
import { CardPanel } from '.';

const meta: Meta<typeof CardPanel> = {
    title: 'miniApp/aeroexpress/widgets/CardPanel',
    component: CardPanel,
    tags: ['autodocs'],
};

export default meta;

type TDummyOrder = Pick<IOrder, 'amount'>;

const dummyOrders: TDummyOrder[] = [
    {
        amount: 183.01,
    },
    {
        amount: 6100.37,
    },
];

export const Default: StoryObj<typeof CardPanel> = {
    args: {
        orders: dummyOrders as unknown as IOrder[],
        currency: dummyCurrency,
        onMinus: action('minus'),
        onPlus: action('plus'),
        id: 1,
    },
};
