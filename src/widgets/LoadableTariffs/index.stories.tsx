import type { Meta, StoryObj } from '@storybook/react';
import { LoadableTariffs } from '.';

const meta: Meta<typeof LoadableTariffs> = {
    title: 'miniApp/aeroexpress/widgets/LoadableTariffs',
    component: LoadableTariffs,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof LoadableTariffs> = {};
