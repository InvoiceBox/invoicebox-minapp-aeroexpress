import type { Meta, StoryObj } from '@storybook/react';
import { App, TProps } from '.';
import '../../index.css';
import { createOrderRequest, fetchTariffsRequest } from '../../network/http';
import { dummyTariffs } from '../../network/dummy';

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

export const InnerAvailableSuccessFetchSuccessSubmit: StoryObj<TProps> = {
    args: {
        fetchTariffs: () => Promise.resolve(dummyTariffs),
        createOrder: () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ url: '/some-url', method: 'GET' });
                }, 1000);
            }),
    },
};
