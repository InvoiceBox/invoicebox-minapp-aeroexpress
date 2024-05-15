import { Select, TSelectProps } from '@invoicebox/ui';
import React, { FC } from 'react';
import { Field, FieldProps } from 'react-final-form';

type TInitialValue = number | null;
type TValueAfterSelect = number;

export type TProps = Omit<
    TSelectProps<TValueAfterSelect>,
    'value' | 'onChange' | 'hasError' | 'onBlur' | 'onFocus'
> &
    Pick<FieldProps<any, any>, 'name'>;

export const SelectField: FC<TProps> = ({ name, ...controlProps }) => {
    const { options } = controlProps;

    return (
        <Field<TInitialValue> name={name}>
            {({ input, meta: { invalid, touched } }) => (
                <Select
                    {...controlProps}
                    value={options.some((option) => option.value === input.value) ? input.value : null}
                    onChange={input.onChange}
                    hasError={touched && invalid}
                    name={input.name}
                    onBlur={input.onBlur}
                    onFocus={input.onFocus}
                />
            )}
        </Field>
    );
};
