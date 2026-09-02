export const MIN_TICKETS_AMOUNT = 1;

export enum FIELDS {
    departDate = 'departDate',
    tariffId = 'tariffId',
    ticketsCount = 'ticketsCount',
}

export type TInnerForm = {
    departDate: Date;
    tariffId: null | number;
    ticketsCount: null | number;
};

export type TOutterForm = {
    departDate: string; // "2023-12-15"
    tariffId: number;
    ticketsCount: number;
};

export const normalizeTo = ({ departDate, tariffId, ticketsCount }: TInnerForm): TOutterForm => {
    const toDigits = (num: number) => `0${num}`.slice(-2);
    // Год — из выбранной даты, НЕ new Date().getFullYear(): глубина продаж до 270
    // дней, декабрьская покупка январской поездки уезжала с прошедшим годом.
    const normalizedDepartDate = `${departDate.getFullYear()}-${toDigits(departDate.getMonth() + 1)}-${toDigits(departDate.getDate())}`;

    return {
        departDate: normalizedDepartDate,
        tariffId: tariffId as number,
        ticketsCount: ticketsCount as number,
    };
};

export const getInitialValues = (minDate: Date): TInnerForm => ({
    departDate: minDate,
    tariffId: null,
    ticketsCount: MIN_TICKETS_AMOUNT,
});

const REQUIRED_MESSAGE = 'Обязательное поле';

export const validate = (values: TInnerForm): Partial<Record<FIELDS, string>> => {
    const errors: Partial<Record<FIELDS, string>> = {};
    if (!values.departDate) errors.departDate = REQUIRED_MESSAGE;
    if (values.tariffId === null || values.tariffId === undefined) errors.tariffId = REQUIRED_MESSAGE;
    if (
        values.ticketsCount === null ||
        values.ticketsCount === undefined ||
        values.ticketsCount < MIN_TICKETS_AMOUNT
    ) {
        errors.ticketsCount = `Минимум ${MIN_TICKETS_AMOUNT}`;
    }
    return errors;
};

export type TTariff = {
    id: number;
    name: string;
    daysFrom: number;
    daysTo: number;
    maxTickets: number;
    price: number;
};
