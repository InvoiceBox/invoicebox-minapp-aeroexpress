import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InterruptConfirm } from '.';

const meta: Meta<typeof InterruptConfirm> = {
    title: 'miniApp/aeroexpress/components/InterruptConfirm',
    component: InterruptConfirm,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof InterruptConfirm> = {
    args: {
        isOpen: false,
        onClose: action('close'),
        onConfirm: action('confirm'),
    },
};
