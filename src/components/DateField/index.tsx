import { DateInput, TDateInputProps } from '@invoicebox/ui';
import React, { FC } from 'react';
import { Field } from 'react-final-form';

// Календарь ui-кита (DateInput) — styled(react-calendar): базовый CSS react-calendar кит
// сам не подключает, потребитель обязан импортировать его сам (так делает и Storybook кита).
// Пакет react-calendar приходит транзитивно с @invoicebox/ui — версией рулит кит.
import 'react-calendar/dist/Calendar.css';

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
