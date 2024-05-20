import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
    title: 'components/Loader',
    component: Loader,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Loader> = {};
