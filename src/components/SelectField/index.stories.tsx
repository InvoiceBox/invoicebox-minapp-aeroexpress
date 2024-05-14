import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectField, TProps } from '.';
import { selectOptions } from '../_helpers/selectOptions';
import { FIELD_NAME, StoryOneFieldForm } from '../_helpers/StoryOneFieldForm';

const meta: Meta<typeof SelectField> = {
    title: 'components/SelectField',
    component: SelectField,
    tags: ['autodocs'],
};

export default meta;

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
