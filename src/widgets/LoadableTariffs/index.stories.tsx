import type { Meta, StoryObj } from '@storybook/react';
import { LoadableTariffs } from '.';
import { TTariff } from '../../network/types';
import { fetchTariffsRequest } from '../../network/http';

const meta: Meta<typeof LoadableTariffs> = {
    title: 'widgets/LoadableTariffs',
    component: LoadableTariffs,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof LoadableTariffs> = {
    args: {
        fetchTariffs: () => Promise.resolve(dummyTariffs),
    },
};

export const RealFetch: StoryObj<typeof LoadableTariffs> = {
    args: {
        fetchTariffs: fetchTariffsRequest,
    },
};

export const LongLoading: StoryObj<typeof LoadableTariffs> = {
    args: {
        fetchTariffs: () =>
            new Promise((resolve) => {
                setTimeout(() => resolve(dummyTariffs), 5000);
            }),
    },
};

const dummyTariff: TTariff = {
    id: 1,
    name: '\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0442\u0443\u0434\u0430-\u043e\u0431\u0440\u0430\u0442\u043d\u043e + 2',
    description:
        '2 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u0432 \u0432\u0430\u0433\u043e\u043d\u0435 \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 (1 \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442, 1 \u043f\u043e\u0435\u0437\u0434\u043a\u0430 \u0438\u0437 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430) \u0434\u043b\u044f 2 \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445 \u0438 2 \u0434\u0435\u0442\u0435\u0439. \u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 30 \u0441\u0443\u0442\u043e\u043a \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u044b. \u041f\u0440\u043e\u0445\u043e\u0434 \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 15 \u043c\u0438\u043d\u0443\u0442 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u0430 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430.<br><font color="red">\u0422\u0430\u0440\u0438\u0444 \u043d\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u043c\u0435\u0436\u0434\u0443 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430\u043c\u0438 B, C \u0438 D, E, F \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430 \u0428\u0435\u0440\u0435\u043c\u0435\u0442\u044c\u0435\u0432\u043e.</font>',
    daysFrom: 0,
    daysTo: 90,
    seatsSelect: false,
    active: true,
    price: 2100.0,
    maxTickets: 1,
    providerTariffId: 21,
    createdAt: '2023-02-01T03:22:29+03:00',
};

const dummyTariffs: TTariff[] = [dummyTariff, { ...dummyTariff, id: 2 }];
