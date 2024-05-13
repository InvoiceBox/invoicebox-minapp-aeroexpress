import type { Meta, StoryObj } from '@storybook/react';
import { App, TProps } from '.';

const meta: Meta<typeof App> = {
    title: 'miniApp/aeroexpress/widgets/App',
    component: App,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {};
