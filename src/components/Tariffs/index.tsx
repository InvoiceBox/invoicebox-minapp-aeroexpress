import React, { FC } from 'react';
import * as S from './styles';
import { Tariff } from '../Tariff';
import { BgCard } from '../BgCard';

export type TProps = {
    tariffs: {
        price: number;
        name: string;
        description: string;
    }[];
};

export const Tariffs: FC<TProps> = ({ tariffs }) => (
    <BgCard>
        <S.Wrapper>
            {tariffs.map(({ price, name, description }) => (
                <Tariff key={name} title={name} sum={price} descripion={description} />
            ))}
        </S.Wrapper>
    </BgCard>
);
