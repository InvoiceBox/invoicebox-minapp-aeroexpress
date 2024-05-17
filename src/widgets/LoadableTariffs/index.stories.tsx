import type { Meta, StoryObj } from '@storybook/react';
import { LoadableTariffs } from '.';
import { fetchTariffsRequest } from '../../network/http';
import { dummyTariffs } from '../../network/dummy';
import { ToastContainer } from '@invoicebox/ui';
import 'react-toastify/dist/ReactToastify.css';

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

export const LoadingError: StoryObj<typeof LoadableTariffs> = {
    args: {
        fetchTariffs: () => Promise.reject(new Error('some error')),
    },
    render: (props) => {
        return (
            <>
                <ToastContainer />
                <LoadableTariffs {...props} />
            </>
        );
    },
};
