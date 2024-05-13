import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CardPanel } from '.';

const meta: Meta<typeof CardPanel> = {
    title: 'miniApp/aeroexpress/components/CardPanel',
    component: CardPanel,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof CardPanel> = {
    args: {
        amount: '4000,00 ₽',
        count: '4 билета',
        onMinus: action('minus'),
        onPlus: action('plus'),
        id: 1,
    },
};
