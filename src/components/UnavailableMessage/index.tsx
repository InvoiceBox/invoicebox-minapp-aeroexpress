import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import * as S from './styles';

export const UnavailableMessage: FC = () => {
    const intl = useIntl();

    return (
        <S.Wrapper>
            {intl.formatMessage({
                id: 'Недоступно для вашего заказа',
                defaultMessage: 'Недоступно для вашего заказа',
            })}
        </S.Wrapper>
    );
};
