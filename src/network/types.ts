export type TTariff = {
    id: number;
    name: string;
    description: string;
    daysFrom: number;
    daysTo: number;
    seatsSelect: boolean;
    active: boolean;
    price: number;
    maxTickets: number;
    providerTariffId: number;
    createdAt: string;
};

export type TCreateOrder = {
    orderContainerId?: string;
    departDate: string; // "2023-12-15"
    email: string;
    firstName: string;
    phone: string; // "+79999999999"
    tariffId: number;
    ticketsCount: number;
};

export type TCreateOrderResponse = {
    url: string;
    method: string;
};
