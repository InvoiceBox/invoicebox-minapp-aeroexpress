import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PositiveIntegerField, TProps } from '.';
import { FIELD_NAME, StoryOneFieldForm } from '../_helpers/StoryOneFieldForm';

const meta: Meta<typeof PositiveIntegerField> = {
    title: 'components/PositiveIntegerField',
    component: PositiveIntegerField,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
    },
    render: (props) => (
        <StoryOneFieldForm initialValue={null}>
            <PositiveIntegerField {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
