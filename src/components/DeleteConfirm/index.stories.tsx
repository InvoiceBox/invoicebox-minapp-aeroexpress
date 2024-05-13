import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DeleteConfirm } from '.';

const meta: Meta<typeof DeleteConfirm> = {
    title: 'miniApp/aeroexpress/components/DeleteConfirm',
    component: DeleteConfirm,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof DeleteConfirm> = {
    args: {
        isOpen: false,
        onClose: action('close'),
        onConfirm: action('confirm'),
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
    },
};
