import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectField, TProps } from '.';
import { FIELD_NAME, StoryOneFieldForm } from '../_helpers/StoryOneFieldForm';

const meta: Meta<typeof SelectField> = {
    title: 'components/SelectField',
    component: SelectField,
    tags: ['autodocs'],
};

export default meta;

const selectOptions = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4' },
    { label: 'Option 5', value: 'option-5' },
    { label: 'Option 6', value: 'option-6' },
    { label: 'Option 7', value: 'option-7' },
    { label: 'Option 8', value: 'option-8' },
    { label: 'Option 9', value: 'option-9' },
    { label: 'Option 10', value: 'option-10' },
    { label: 'Option 11', value: 'option-11' },
    { label: 'Option 12', value: 'option-12' },
];

export const Default: StoryObj<TProps> = {
    args: {
        options: selectOptions,
        label: 'Label',
        placeholder: 'Placeholder',
    },
    render: (props) => (
        <StoryOneFieldForm initialValue={null}>
            <SelectField {...props} name={FIELD_NAME} />
        </StoryOneFieldForm>
    ),
};
