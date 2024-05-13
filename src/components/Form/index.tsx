import React, { FC, MouseEvent, useCallback, useMemo, useState } from 'react';
import { Form as LibForm } from 'react-final-form';
import { useValidationSchema } from 'src/hooks';
import { TInnerForm, TOutterForm, TTariff, getInitialValues, normalizeTo, validationSchema } from './types';
import { logic } from './logic';
import { FormInner } from './components/FormInner';
import * as S from './styles';

export type TProps = {
    onSubmit: (form: TOutterForm) => Promise<void>;
    initialTariffs: TTariff[];
    onLink: (event: MouseEvent<HTMLAnchorElement>) => void;
    tariffsHref: string;
    buttonText: string;
};

export const Form: FC<TProps> = ({ onSubmit, initialTariffs, onLink, tariffsHref, buttonText }) => {
    const [isSubmitting, setSubmittingFlag] = useState(false);

    const minDate = useMemo(() => logic.getMinDate(initialTariffs), [initialTariffs]);
    const maxDate = useMemo(() => logic.getMaxDate(initialTariffs), [initialTariffs]);

    const initialValues = useMemo(() => getInitialValues(minDate), [minDate]);

    const validation = useValidationSchema(validationSchema);

    const submit = useCallback(
        (form: TInnerForm) => {
            setSubmittingFlag(true);
            onSubmit(normalizeTo(form)).finally(() => {
                setSubmittingFlag(false);
            });
        },
        [onSubmit],
    );

    return (
        <LibForm onSubmit={submit} initialValues={initialValues} validate={validation}>
            {({ handleSubmit }) => (
                <S.Form onSubmit={handleSubmit}>
                    <FormInner
                        maxDate={maxDate}
                        minDate={minDate}
                        tariffs={initialTariffs}
                        resetValues={initialValues}
                        isSubmitting={isSubmitting}
                        onLink={onLink}
                        tariffsHref={tariffsHref}
                        buttonText={buttonText}
                    />
                </S.Form>
            )}
        </LibForm>
    );
};
