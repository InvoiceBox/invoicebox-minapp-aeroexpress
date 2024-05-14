import yup from 'yup';

const apiDateFormatter = (date: Date) => {
    const toDigits = (num: number) => `0${num}`.slice(-2);
    return `${new Date().getFullYear()}-${toDigits(date.getMonth() + 1)}-${toDigits(date.getDate())}`;
};

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

export const normalizeTo = ({ departDate, tariffId, ticketsCount }: TInnerForm): TOutterForm => ({
    departDate: apiDateFormatter(departDate),
    tariffId: tariffId as number,
    ticketsCount: ticketsCount as number,
});

export const getInitialValues = (minDate: Date): TInnerForm => ({
    departDate: minDate,
    tariffId: null,
    ticketsCount: MIN_TICKETS_AMOUNT,
});

export const validationSchema = yup.object().shape({
    departDate: yup.date().required(),
    tariffId: yup.number().required(),
    ticketsCount: yup.number().min(MIN_TICKETS_AMOUNT).required(),
});

export type TTariff = {
    id: number;
    name: string;
    daysFrom: number;
    daysTo: number;
    maxTickets: number;
    price: number;
};
