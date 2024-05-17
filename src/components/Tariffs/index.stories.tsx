import type { Meta, StoryObj } from '@storybook/react';
import { Tariffs } from '.';

const meta: Meta<typeof Tariffs> = {
    title: 'components/Tariffs',
    component: Tariffs,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tariffs> = {
    args: {
        tariffs: [
            {
                price: 1000,
                name: 'Title',
                description: 'Descripion',
            },
            {
                price: 2,
                name: 'Title 2',
                description:
                    '1 поездка в вагоне «Бизнес». ' +
                    'Действителен на любом направлении от/до аэропортов Шереметьево, ' +
                    'Домодедово, или Внуково, в течение 30 дней с даты, выбранной при покупке. ' +
                    'Посадочное место не фиксировано. В стоимость включено: напитки, упаковка 1 ' +
                    'места багажа (а/п Домодедово, Белорусский вкз).<br> <font color="red">Тариф не ' +
                    'предназначен для поездки между терминалами B, C и D, E, F аэропорта Шереметьево.</font>',
            },
        ],
    },
};

export const NoTariffs: StoryObj<typeof Tariffs> = {
    args: {
        tariffs: [],
    },
};
