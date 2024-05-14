import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateField, TProps } from '.';
import { FIELD_NAME, StoryOneFieldForm } from '../_helpers/StoryOneFieldForm';

const meta: Meta<typeof DateField> = {
    title: 'common/formFields/DateField',
    component: DateField,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<TProps> = {
    args: {
        label: 'Label',
    },
    render: (props) => (
        <StoryOneFieldForm initialValue={null}>
            <DateField {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
