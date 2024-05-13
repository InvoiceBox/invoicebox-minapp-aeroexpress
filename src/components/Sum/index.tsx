import React, { FC } from 'react';
import * as S from './styles';

export type TProps = {
    children: string;
};

export const Sum: FC<TProps> = ({ children }) => <S.Wrapper variant="headline2">{children}</S.Wrapper>;
