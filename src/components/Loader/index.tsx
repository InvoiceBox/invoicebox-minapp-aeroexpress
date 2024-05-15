import { InvoiceboxLoader } from '@invoicebox/ui';
import React, { FC } from 'react';
import * as S from './styles';

export const Loader: FC = () => (
    <S.Wrapper>
        <InvoiceboxLoader width="120px" />
    </S.Wrapper>
);
