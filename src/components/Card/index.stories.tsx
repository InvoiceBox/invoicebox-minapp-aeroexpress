import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, TProps } from '.';

const meta: Meta<typeof Card> = {
    title: 'miniApp/aeroexpress/components/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;

const args = {
    isActive: false,
    title: 'Купить билеты на аэроэкспресс',
    description: 'Удобный способ добраться в аэропорт из центра Москвы',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
};

export const Default: StoryObj<typeof Card> = {
    args: {
        ...args,
        children: 'children',
    },
};

export const InGrid: StoryObj<TProps> = {
    args: {
        ...args,
        children: 'children',
    },
    render: (props: TProps) => (
        <div style={{ display: 'grid', gridTemplateRows: '200px' }}>
            <Card {...props} />
        </div>
    ),
};
