import { TBasketItemInfo } from '@invoicebox/minapp-sdk';

// Матчинг «билет Аэроэкспресса уже куплен на стороне мерчанта» (пример: пользователь
// выбрал Аэроэкспресс при бронировании авиабилета — позиция уже в корзине счёта).
// Паттерны консервативные: матчим по наименованию позиции; SKU-паттерны дополняются,
// когда мерчанты сообщат формат артикулов.
const NAME_PATTERNS = [/аэроэкспресс/i, /aeroexpress/i];
const SKU_PATTERNS: RegExp[] = [];

export const isAeroexpressAlreadyInBasket = (basketItems: TBasketItemInfo[]): boolean =>
    basketItems.some(
        (item) =>
            NAME_PATTERNS.some((pattern) => pattern.test(item.name)) ||
            SKU_PATTERNS.some((pattern) => pattern.test(item.sku)),
    );
