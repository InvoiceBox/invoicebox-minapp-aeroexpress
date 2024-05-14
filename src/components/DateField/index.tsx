import { DateInput, TDateInputProps } from '@invoicebox/ui';
import React, { FC } from 'react';
import { Field, FieldProps } from 'react-final-form';

import 'react-calendar/dist/Calendar.css';
import '@invoicebox/ui/dist/components/common/Calendar/index.css';

export type TProps = Omit<TDateInputProps, 'value' | 'onChange' | 'hasError' | 'onBlur' | 'onFocus'> &
    Pick<FieldProps<any, any>, 'name'>;

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
