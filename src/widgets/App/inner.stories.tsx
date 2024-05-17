import type { Meta, StoryObj } from '@storybook/react';
import { App, TProps } from '.';
import '../../index.css';
import { createOrderRequest, fetchTariffsRequest } from '../../network/http';

const meta: Meta<typeof App> = {
    title: 'widgets/App/_inner',
    component: App,
    tags: ['autodocs'],
};

export default meta;

export const InnerAvailableRealFetchRealSubmit: StoryObj<TProps> = {
    args: {
        fetchTariffs: fetchTariffsRequest,
        createOrder: createOrderRequest,
    },
};
