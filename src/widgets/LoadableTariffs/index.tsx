import React, { FC } from 'react';
import { useTariffs } from './hooks/useTariffs';
import { TariffsPage } from '../../components/TariffsPage';
import { Tariffs } from '../../components/Tariffs';
import { Loader } from '../../components/Loader';
import { TTariff } from '../../network/types';

export type TProps = {
    fetchTariffs: () => Promise<TTariff[]>;
};

export const LoadableTariffs: FC<TProps> = ({ fetchTariffs }) => {
    const { tariffs, isInitialized } = useTariffs({ fetchTariffs });

    if (!isInitialized) return <Loader />;

    return (
        <TariffsPage>
            <Tariffs tariffs={tariffs} />
        </TariffsPage>
    );
};
