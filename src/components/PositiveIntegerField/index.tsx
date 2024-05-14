import React, { FC } from 'react';
import { Field, FieldProps } from 'react-final-form';
import { PositiveIntegerInput } from '@invoicebox/ui';
import { TProps as TPositiveIntegerInputProps } from '@invoicebox/ui/dist/components/form/PositiveIntegerInput';

export type TProps = Omit<TPositiveIntegerInputProps, 'value' | 'onChange' | 'onBlur' | 'onFocus' | 'hasError'> &
    Pick<FieldProps<any, any>, 'name'>;

export const PositiveIntegerField: FC<TProps> = ({ name, ...controlProps }) => (
    <Field<number | null> name={name}>
        {({ input, meta: { invalid, modified, touched } }) => (
            <PositiveIntegerInput
                {...controlProps}
                value={input.value === null || typeof input.value === 'number' ? input.value : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                hasError={(touched || modified) && invalid}
                onFocus={input.onFocus}
                name={input.name}
            />
        )}
    </Field>
);
