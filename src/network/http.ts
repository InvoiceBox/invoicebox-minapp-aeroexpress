import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
import { TCreateOrder, TCreateOrderResponse, TTariff } from './types';
import { aeroexpressLogic } from './logic';

export interface ICommonResponse<D, E = any> {
    data: D;
    extendedData: Array<E>;
    metaData: {
        totalCount: number;
        pageSize: number;
        page: number;
    };
}

export const fetchTariffsRequest = () =>
    fetch(`${aeroexpressLogic.getBaseUrl()}/tariffs`)
        .then((response) => {
            if (response.ok) return response;
            throw new Error(response.statusText);
        })
        .then((response) => response.json() as Promise<ICommonResponse<TTariff[], void>>)
        .then((response) => {
            const data = response.data.map((item) =>
                // @ts-ignore
                camelcaseKeys(item),
            ) as TTariff[];
            response.data = data;
            return response.data;
        });

export const createOrderRequest = (data: TCreateOrder) =>
    fetch(`${aeroexpressLogic.getBaseUrl()}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(snakecaseKeys(data)),
    }).then((response) => {
        if (response.ok) return response.json() as Promise<ICommonResponse<TCreateOrderResponse>>;
        throw new Error(response.statusText);
    });
