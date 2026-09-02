import { describe, expect, it } from 'vitest';
import { mapCreateOrderToApi, mapTariffFromApi } from './http';

describe('mapTariffFromApi', () => {
    it('маппит snake_case API в camelCase', () => {
        expect(
            mapTariffFromApi({
                id: 1,
                name: 'Стандарт',
                description: 'desc',
                days_from: 0,
                days_to: 270,
                seats_select: false,
                active: true,
                price: 450,
                max_tickets: 10,
                provider_tariff_id: 7,
                created_at: '2026-01-01',
            }),
        ).toEqual({
            id: 1,
            name: 'Стандарт',
            description: 'desc',
            daysFrom: 0,
            daysTo: 270,
            seatsSelect: false,
            active: true,
            price: 450,
            maxTickets: 10,
            providerTariffId: 7,
            createdAt: '2026-01-01',
        });
    });
});

describe('mapCreateOrderToApi', () => {
    it('маппит camelCase в snake_case для API', () => {
        expect(
            mapCreateOrderToApi({
                orderContainerId: 'oc-1',
                departDate: '2026-09-05',
                email: 'user@example.com',
                firstName: 'Иван',
                phone: '+79990000000',
                tariffId: 1,
                ticketsCount: 2,
            }),
        ).toEqual({
            order_container_id: 'oc-1',
            depart_date: '2026-09-05',
            email: 'user@example.com',
            first_name: 'Иван',
            phone: '+79990000000',
            tariff_id: 1,
            tickets_count: 2,
        });
    });
});
