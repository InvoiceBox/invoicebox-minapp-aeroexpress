import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
import { TCreateOrder, TCreateOrderResponse, TTariff } from './types';
import { envLogic } from './envLogic';

export interface ICommonResponse<D, E = any> {
    data: D;
    extendedData: Array<E>;
    metaData: {
        totalCount: number;
        pageSize: number;
        page: number;
    };
}

export const fetchTariffsRequest = (): Promise<TTariff[]> =>
    fetch(`${envLogic.getApiUrl()}/tariffs`)
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response;
        })
        .then((response) => response.json() as Promise<ICommonResponse<TTariff[], void>>)
        .then((response) => {
            const data = response.data
                .map(
                    (item) =>
                        // @ts-ignore
                        camelcaseKeys(item) as TTariff,
                )
                .filter((tariff) => tariff.active);
            return data;
        });

export type TFetchTariffsRequest = typeof fetchTariffsRequest;

export const createOrderRequest = (data: TCreateOrder): Promise<TCreateOrderResponse> =>
    fetch(`${envLogic.getApiUrl()}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(snakecaseKeys(data)),
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusText);
            return response;
        })
        .then((response) => response.json() as Promise<ICommonResponse<TCreateOrderResponse>>)
        .then((response) => response.data);

export type TCreateOrderRequest = typeof createOrderRequest;
