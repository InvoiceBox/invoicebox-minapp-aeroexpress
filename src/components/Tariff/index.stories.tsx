import type { Meta, StoryObj } from '@storybook/react';
import { Tariff } from '.';

const meta: Meta<typeof Tariff> = {
    title: 'miniApp/aeroexpress/components/Tariff',
    component: Tariff,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tariff> = {
    args: {
        title: 'Title',
        sum: 1000,
        descripion: 'Descripion',
    },
};
