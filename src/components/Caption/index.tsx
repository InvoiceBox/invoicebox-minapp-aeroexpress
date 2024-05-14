import React, { FC, MouseEvent } from 'react';
import * as S from './styles';

const OFFER_URL = 'https://www.invoicebox.ru/ru/offer.html?utm_source=paymentpage&utm_content=bottomlink';
const POLICY_URL =
    'https://www.invoicebox.ru/ru/privacypolicy/russia/main.html?utm_source=paymentpage&utm_content=bottomlink';

export type TProps = {
    onLink: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const Caption: FC<TProps> = ({ onLink }) => (
    <S.Wrapper variant="captionRegular">
        Добавляя в заказ, вы принимаете{' '}
        <a onClick={onLink} href={OFFER_URL}>
            пользовательское соглашение
        </a>{' '}
        и{' '}
        <a onClick={onLink} href={POLICY_URL}>
            правила обработки персональных данных
        </a>
    </S.Wrapper>
);
