import { describe, expect, it } from 'vitest';
import { MIN_TICKETS_AMOUNT, normalizeTo, validate } from './types';

describe('normalizeTo', () => {
    it('форматирует дату с ведущими нулями', () => {
        expect(normalizeTo({ departDate: new Date(2026, 8, 5), tariffId: 1, ticketsCount: 2 })).toEqual({
            departDate: '2026-09-05',
            tariffId: 1,
            ticketsCount: 2,
        });
    });

    it('берёт год из выбранной даты: декабрьская покупка январской поездки', () => {
        // регресс: год подставлялся из new Date() и январская дата уезжала прошлым годом
        expect(normalizeTo({ departDate: new Date(2027, 0, 10), tariffId: 3, ticketsCount: 1 })).toEqual({
            departDate: '2027-01-10',
            tariffId: 3,
            ticketsCount: 1,
        });
    });
});

describe('validate', () => {
    const valid = { departDate: new Date(2026, 8, 5), tariffId: 1, ticketsCount: MIN_TICKETS_AMOUNT };

    it('валидная форма — без ошибок', () => {
        expect(validate(valid)).toEqual({});
    });

    it('обязательные поля', () => {
        const errors = validate({ ...valid, tariffId: null, ticketsCount: null });
        expect(errors.tariffId).toBeTruthy();
        expect(errors.ticketsCount).toBeTruthy();
    });

    it('количество билетов не меньше минимума', () => {
        expect(validate({ ...valid, ticketsCount: 0 }).ticketsCount).toBeTruthy();
    });
});
