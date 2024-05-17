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

const defaultMocks: TProps = {
    fetchTariffs: () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(dummyTariffs);
            }, 1000);
        }),
    createOrder: () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({ url: '/some-url', method: 'GET' });
            }, 1000);
        }),
};

export const InnerAvailableRealFetchRealSubmit: StoryObj<TProps> = {
    args: {
        fetchTariffs: fetchTariffsRequest,
        createOrder: createOrderRequest,
    },
};

export const InnerAvailableSuccessFetchSuccessSubmit: StoryObj<TProps> = {
    args: defaultMocks,
};

export const InnerUnavailable: StoryObj<TProps> = {
    args: defaultMocks,
};

export const InnerAvailableErrorFetch: StoryObj<TProps> = {
    args: {
        ...defaultMocks,
        fetchTariffs: () => Promise.reject(new Error('error')),
    },
};

export const InnerAvailableSuccessFetchErrorSubmit: StoryObj<TProps> = {
    args: {
        ...defaultMocks,
        createOrder: () => Promise.reject(new Error('error')),
    },
};
