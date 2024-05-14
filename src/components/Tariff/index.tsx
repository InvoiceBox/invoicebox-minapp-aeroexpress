import React, { FC } from 'react';
import * as S from './styles';

export type TProps = {
    title: string;
    sum: number;
    descripion: string;
};

export const Tariff: FC<TProps> = ({ title, sum, descripion }) => (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Title variant="headline3">{title}</S.Title>
            <S.Sum variant="headline6">{sum} ₽</S.Sum>
        </S.TitleWrapper>
        <S.Description variant="bodyMRegular" dangerouslySetInnerHTML={{ __html: descripion }} />
    </S.Wrapper>
);
