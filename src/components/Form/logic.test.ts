import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { logic } from './logic';

describe('Form logic', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date(2026, 11, 20)); // 20 декабря 2026
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('getMinDate/getMaxDate по тарифам', () => {
        const tariffs = [
            { daysFrom: 0, daysTo: 30 },
            { daysFrom: 5, daysTo: 270 },
        ];
        expect(logic.getMinDate(tariffs).getTime()).toBe(new Date(2026, 11, 20, 0, 0, 0, 0).getTime());
        // 20.12.2026 + 270 дней — переход через год
        expect(logic.getMaxDate(tariffs).getFullYear()).toBe(2027);
    });

    it('isDateMatchTariff учитывает границы', () => {
        const tariff = { daysFrom: 0, daysTo: 30 };
        expect(logic.isDateMatchTariff(new Date(2026, 11, 25), tariff)).toBe(true);
        expect(logic.isDateMatchTariff(new Date(2027, 1, 1), tariff)).toBe(false);
    });

    it('getSumForDisplay', () => {
        expect(logic.getSumForDisplay({ price: 450 }, 2)).toBe('900 ₽');
        expect(logic.getSumForDisplay(undefined, 2)).toBe('');
        expect(logic.getSumForDisplay({ price: 450 }, null)).toBe('');
    });
});
