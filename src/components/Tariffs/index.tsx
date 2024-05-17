import React, { FC } from 'react';
import * as S from './styles';
import { Tariff } from '../Tariff';
import { BgCard, Typography } from '@invoicebox/ui';

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
            {!tariffs.length && (
                <S.EmptyMessage>
                    <Typography variant="headline4">Тарифы не найдены</Typography>
                </S.EmptyMessage>
            )}
            {tariffs.map(({ price, name, description }) => (
                <Tariff key={name} title={name} sum={price} descripion={description} />
            ))}
        </S.Wrapper>
    </BgCard>
);
