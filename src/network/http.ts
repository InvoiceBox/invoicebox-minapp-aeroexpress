import { TCreateOrder, TCreateOrderResponse, TTariff } from './types';
import { envLogic } from './envLogic';

export interface ICommonResponse<D, E = unknown> {
    data: D;
    extendedData: Array<E>;
    metaData: {
        totalCount: number;
        pageSize: number;
        page: number;
    };
}

// Явные мапперы вместо camelcase-keys/snakecase-keys: два вызова не оправдывали
// двух деревьев зависимостей, а явная схема ловит расхождения с API на ревью.
type TTariffApi = {
    id: number;
    name: string;
    description: string;
    days_from: number;
    days_to: number;
    seats_select: boolean;
    active: boolean;
    price: number;
    max_tickets: number;
    provider_tariff_id: number;
    created_at: string;
};

export const mapTariffFromApi = (tariff: TTariffApi): TTariff => ({
    id: tariff.id,
    name: tariff.name,
    description: tariff.description,
    daysFrom: tariff.days_from,
    daysTo: tariff.days_to,
    seatsSelect: tariff.seats_select,
    active: tariff.active,
    price: tariff.price,
    maxTickets: tariff.max_tickets,
    providerTariffId: tariff.provider_tariff_id,
    createdAt: tariff.created_at,
});

export const mapCreateOrderToApi = (data: TCreateOrder) => ({
    order_container_id: data.orderContainerId,
    depart_date: data.departDate,
    email: data.email,
    first_name: data.firstName,
    phone: data.phone,
    tariff_id: data.tariffId,
    tickets_count: data.ticketsCount,
});

export const fetchTariffsRequest = (): Promise<TTariff[]> =>
    fetch(`${envLogic.getApiUrl()}/tariffs`)
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json() as Promise<ICommonResponse<TTariffApi[], void>>;
        })
        .then((response) => response.data.map(mapTariffFromApi).filter((tariff) => tariff.active));

export type TFetchTariffsRequest = typeof fetchTariffsRequest;

export const createOrderRequest = (data: TCreateOrder): Promise<TCreateOrderResponse> =>
    fetch(`${envLogic.getApiUrl()}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mapCreateOrderToApi(data)),
    })
        .then((response) => {
            if (!response.ok) throw new Error('Ошибка при оформлении заказа');
            return response.json() as Promise<ICommonResponse<TCreateOrderResponse>>;
        })
        .then((response) => response.data);

export type TCreateOrderRequest = typeof createOrderRequest;
