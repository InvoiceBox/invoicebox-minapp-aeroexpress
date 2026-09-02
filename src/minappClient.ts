import { createMinapp, InvoiceboxMinapp } from '@invoicebox/minapp-sdk';

let instance: InvoiceboxMinapp | null = null;

// Ленивый синглтон: экземпляр создаётся при первом обращении из браузерного кода
// (конструктор SDK требует window).
export const getMinapp = (): InvoiceboxMinapp => {
    instance ??= createMinapp();
    return instance;
};
