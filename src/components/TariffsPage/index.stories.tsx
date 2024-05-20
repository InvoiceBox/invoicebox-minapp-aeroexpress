import type { Meta, StoryObj } from '@storybook/react';
import { TariffsPage } from '.';

const meta: Meta<typeof TariffsPage> = {
    title: 'components/TariffsPage',
    component: TariffsPage,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof TariffsPage> = {
    args: {
        children: 'Children',
    },
};
