import React, { FC, ReactNode } from 'react';
import * as S from './styles';

export type TProps = {
    isActive: boolean;
    children: ReactNode;
    title: string;
    description: string;
    img?: string;
};

export const Card: FC<TProps> = ({ isActive, children, title, description, img }) => (
    <S.Wrapper $isActive={isActive}>
        <S.BodyWrapper>
            <S.TextsWrapper>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.TextsWrapper>
            {img && (
                <S.LogoWrapper>
                    <img src={img} alt="logo" />
                </S.LogoWrapper>
            )}
        </S.BodyWrapper>
        {children}
    </S.Wrapper>
);
