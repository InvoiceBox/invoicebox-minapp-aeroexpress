import { DateInput, TDateInputProps } from '@invoicebox/ui';
import React, { FC } from 'react';
import { Field } from 'react-final-form';

export type TProps = Omit<TDateInputProps, 'value' | 'onChange' | 'hasError' | 'onBlur' | 'onFocus'> & {
    name: string;
};

export const DateField: FC<TProps> = ({ name, ...controlProps }) => (
    <Field<Date | null> name={name}>
        {({ input, meta: { invalid, touched } }) => (
            <DateInput
                {...controlProps}
                value={input.value}
                onChange={input.onChange}
                hasError={touched && invalid}
                name={input.name}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
            />
        )}
    </Field>
);
