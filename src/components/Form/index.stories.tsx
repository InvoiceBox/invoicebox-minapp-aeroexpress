import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form, TProps } from '.';
import { dummyTariffs } from '../../network/dummy';

const meta: Meta<typeof Form> = {
    title: 'components/Form',
    component: Form,
    tags: ['autodocs'],
};

export default meta;

const args: TProps = {
    onSubmit: async (...props: any[]) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        action('submit')(...props);
    },
    initialTariffs: dummyTariffs,
    onLink: (event) => {
        event.preventDefault();
        action('onLink')();
    },
    tariffsHref: 'https://example.com/aeroexpress/tariffs',
    buttonText: 'Добавить в заказ',
};

export const Default: StoryObj<TProps> = {
    args,
};

export const ContainerWithHeigth: StoryObj<TProps> = {
    args,
    render: (props) => (
        <div style={{ height: 400 }}>
            <Form {...props} />
        </div>
    ),
};
