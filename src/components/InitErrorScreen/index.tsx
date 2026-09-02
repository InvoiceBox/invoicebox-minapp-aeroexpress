import React, { FC } from 'react';
import { Typography } from '@invoicebox/ui';
import * as S from './styles';

export const InitErrorScreen: FC = () => (
    <S.Wrapper>
        <S.Title>
            <Typography variant="headline3">Сервис временно недоступен</Typography>
        </S.Title>
        <Typography variant="bodyMRegular">
            Не удалось загрузить данные. Пожалуйста, обновите страницу или попробуйте позже.
        </Typography>
    </S.Wrapper>
);
