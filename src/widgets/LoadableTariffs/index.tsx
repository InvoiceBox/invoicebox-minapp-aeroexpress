import React, { FC } from 'react';
import { Loader } from 'src/components';
import { useTariffs } from './hooks/useTariffs';
import { TariffsPage } from '../../components/TariffsPage';
import { Tariffs } from '../../components/Tariffs';

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
