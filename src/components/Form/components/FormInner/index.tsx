import React, { FC, MouseEvent, useEffect, useMemo, useRef } from 'react';
import { DateField } from 'src/stories/common/formFields/DateField';
import { SelectField } from 'src/stories/common/formFields/SelectField';
import { PositiveIntegerField } from 'src/stories/common/formFields/PositiveIntegerField';
import { useForm } from 'react-final-form';
import { Divider, SecondaryButton, WarningIcon } from '@invoicebox/ui';
import * as S from './styles';
import { FIELDS, TInnerForm, TTariff } from '../../types';
import { logic } from '../../logic';
import { Caption } from '../../../Caption';
import { Sum } from '../../../Sum';
import { useMobile } from '../../../../hooks/useMedia';

export type TProps = {
    minDate: Date;
    maxDate: Date;
    tariffs: TTariff[];
    resetValues: TInnerForm;
    isSubmitting: boolean;
    onLink: (event: MouseEvent<HTMLAnchorElement>) => void;
    tariffsHref: string;
    buttonText: string;
};

export const FormInner: FC<TProps> = ({
    minDate,
    maxDate,
    tariffs,
    resetValues,
    isSubmitting,
    onLink,
    tariffsHref,
    buttonText,
}) => {
    const { getState, change } = useForm();
    const { valid, values } = getState();

    const isMobile = useMobile();

    const { departDate, tariffId, ticketsCount } = values as TInnerForm;

    const departTimestampCache = useRef<number>(departDate.valueOf());
    useEffect(() => {
        if (departTimestampCache.current !== departDate.valueOf()) {
            departTimestampCache.current = departDate.valueOf();
            change(FIELDS.tariffId, resetValues.tariffId);
        }
    }, [resetValues, change, departDate]);

    const tariffIdCache = useRef(tariffId);
    useEffect(() => {
        if (tariffIdCache.current !== tariffId) {
            tariffIdCache.current = tariffId;
            change(FIELDS.ticketsCount, resetValues.ticketsCount);
        }
    }, [resetValues, change, tariffId]);

    const options = useMemo(
        () =>
            tariffs
                .filter((tariff) => logic.isDateMatchTariff(departDate, tariff))
                .map(({ id, name }) => ({ value: id, label: name })),
        [tariffs, departDate],
    );

    const selectedTariff = useMemo(
        () => tariffs.find((tariff) => tariff.id === tariffId),
        [tariffId, tariffs],
    );

    const sumForDisplay = useMemo(
        () => logic.getSumForDisplay(selectedTariff, ticketsCount),
        [selectedTariff, ticketsCount],
    );

    return (
        <>
            <div>
                <S.Description variant="headline5">
                    Для оформления заказа, пожалуйста, укажите данные поездки
                </S.Description>
                <S.Controls>
                    <S.DateWrapper>
                        <DateField
                            label="Дата поездки"
                            name={FIELDS.departDate}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </S.DateWrapper>
                    <S.TariffWrapper>
                        <SelectField
                            placeholder="Выберите из списка"
                            label="Тариф"
                            options={options}
                            name={FIELDS.tariffId}
                        />
                        <S.IconWrappr href={tariffsHref} onClick={onLink}>
                            <WarningIcon size={24} />
                        </S.IconWrappr>
                    </S.TariffWrapper>
                    <S.CountWrapper>
                        <PositiveIntegerField
                            key={tariffId}
                            label="Кол-во"
                            upAndDown
                            name={FIELDS.ticketsCount}
                            max={selectedTariff?.maxTickets}
                        />
                    </S.CountWrapper>
                </S.Controls>
            </div>
            <div>
                <S.DividerWrapper>
                    <Divider />
                </S.DividerWrapper>
                <S.SummaryWrapper>
                    <S.Total variant="headline3" $isSum={!!sumForDisplay}>
                        Итого:
                    </S.Total>
                    <S.SumWrapper $isSum={!!sumForDisplay}>
                        <Sum>{sumForDisplay}</Sum>
                    </S.SumWrapper>
                    <S.CaptionWrapper>
                        <Caption onLink={onLink} />
                    </S.CaptionWrapper>
                </S.SummaryWrapper>
                <SecondaryButton
                    disabled={!valid}
                    isLoading={isSubmitting}
                    type="submit"
                    fullWidth={isMobile}
                >
                    {buttonText}
                </SecondaryButton>
            </div>
        </>
    );
};
