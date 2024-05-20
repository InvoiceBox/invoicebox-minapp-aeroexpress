import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Caption } from '.';

const meta: Meta<typeof Caption> = {
    title: 'components/Caption',
    component: Caption,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Caption> = {
    args: {
        onLink: (event) => {
            event.preventDefault();
            action('onLink')();
        },
    },
};
