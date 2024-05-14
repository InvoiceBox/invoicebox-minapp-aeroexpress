import React, { FC } from 'react';
import { useTariffs } from './hooks/useTariffs';
import { TariffsPage } from '../../components/TariffsPage';
import { Tariffs } from '../../components/Tariffs';
import { Loader } from '../../components/Loader';

export type TProps = {};

export const LoadableTariffs: FC<TProps> = () => {
    const { tariffs, isInitialized } = useTariffs();

    if (!isInitialized) return <Loader />;

    return (
        <TariffsPage>
            <Tariffs tariffs={tariffs} />
        </TariffsPage>
    );
};
