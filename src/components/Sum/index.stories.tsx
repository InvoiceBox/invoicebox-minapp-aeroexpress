import type { Meta, StoryObj } from '@storybook/react';
import { Sum } from '.';

const meta: Meta<typeof Sum> = {
    title: 'components/Sum',
    component: Sum,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Sum> = {
    args: {
        children: '1000 ₽',
    },
};
