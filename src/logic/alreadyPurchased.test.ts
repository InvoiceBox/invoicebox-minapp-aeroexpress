import { describe, expect, it } from 'vitest';
import { isAeroexpressAlreadyInBasket } from './alreadyPurchased';

describe('isAeroexpressAlreadyInBasket', () => {
    it('матчит по наименованию (регистронезависимо, ru/en)', () => {
        expect(isAeroexpressAlreadyInBasket([{ sku: 'X1', name: 'Билет АЭРОЭКСПРЕСС стандарт' }])).toBe(true);
        expect(isAeroexpressAlreadyInBasket([{ sku: 'X1', name: 'Aeroexpress ticket' }])).toBe(true);
    });

    it('не матчит посторонние позиции', () => {
        expect(
            isAeroexpressAlreadyInBasket([
                { sku: 'AVIA-1', name: 'Авиабилет Москва — Сочи' },
                { sku: 'INS-2', name: 'Страховка' },
            ]),
        ).toBe(false);
        expect(isAeroexpressAlreadyInBasket([])).toBe(false);
    });
});
