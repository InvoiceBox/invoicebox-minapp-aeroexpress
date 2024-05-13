import React, { FC, ReactNode } from 'react';
import * as S from './styles';

export type TProps = {
    children: ReactNode;
};

export const TariffsPage: FC<TProps> = ({ children }) => (
    <S.Wrapper>
        <S.Baner />
        <S.Content>{children}</S.Content>
    </S.Wrapper>
);
