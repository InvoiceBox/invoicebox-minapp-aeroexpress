import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DeleteDialog } from '.';

const meta: Meta<typeof DeleteDialog> = {
    title: 'miniApp/aeroexpress/components/DeleteDialog',
    component: DeleteDialog,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof DeleteDialog> = {
    args: {
        isOpen: false,
        onClose: action('close'),
        items: [
            {
                id: '1',
                title: 'Семейный туда-обратно',
                count: '1 билет',
                date: '18.10.2024',
                amount: '1000,00 ₽',
            },
            {
                id: '2',
                title:
                    'Семейный туда-обратно Семейный туда-обратно ' +
                    'Семейный туда-обратно Семейный туда-обратно ' +
                    'Семейный туда-обратно Семейный туда-обратно',
                count: '1 билет',
                date: '18.10.2024',
                amount: '1000,00 ₽',
            },
        ],
        onDelete: action('delete'),
    },
};
