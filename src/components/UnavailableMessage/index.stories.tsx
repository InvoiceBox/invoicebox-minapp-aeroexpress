import type { Meta, StoryObj } from '@storybook/react';
import { UnavailableMessage } from '.';

const meta: Meta<typeof UnavailableMessage> = {
    title: 'miniApp/aeroexpress/components/UnavailableMessage',
    component: UnavailableMessage,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UnavailableMessage> = {};
