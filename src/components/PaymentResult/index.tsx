import React, { FC } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { SecondaryButton, Typography } from '@invoicebox/ui';
import * as S from './styles';

export type TProps = {
    status: TPaymentStatus;
    onRetry?: () => void;
};

type TContent = { title: string; message: string; buttonText: string };

// Статусы — из протокола (TPaymentStatus). Раньше здесь матчился несуществующий
// 'paid', а настоящий 'completed' проваливался в null — успешная оплата
// показывала пустой экран.
const CONTENT: Record<TPaymentStatus, TContent> = {
    completed: {
        title: 'Оплата прошла успешно!',
        message: 'Ваш билет оплачен. Вы можете оформить новый билет, либо выйти из модуля оплаты.',
        buttonText: 'Оформить ещё',
    },
    pending: {
        title: 'Оплата в обработке',
        message: 'Платёж передан в обработку',
        buttonText: 'Продолжить',
    },
    hold: {
        title: 'Платёж обрабатывается',
        message: 'По счёту осуществляется удержание средств (блокировка средств)',
        buttonText: 'Оформить ещё',
    },
    canceled: {
        title: 'Оплата отменена',
        message:
            'Вы отменили оплату. Вы можете попробовать еще раз или продолжить оформление других билетов.',
        buttonText: 'Попробовать еще раз',
    },
    expired: {
        title: 'Истёк срок оплаты билета',
        message: 'Срок оплаты счёта истёк, оплата счёта невозможна',
        buttonText: 'Оформить новый билет',
    },
    unknown: {
        title: 'Статус оплаты неизвестен',
        message: 'Не удалось определить результат оплаты. Проверьте почту или попробуйте ещё раз.',
        buttonText: 'Продолжить',
    },
};

export const PaymentResult: FC<TProps> = ({ status, onRetry }) => {
    const content = CONTENT[status] ?? CONTENT.unknown;

    return (
        <S.Wrapper>
            <S.Title>
                <Typography variant="headline3">{content.title}</Typography>
            </S.Title>
            <S.Message>
                <Typography variant="bodyMRegular">{content.message}</Typography>
            </S.Message>
            <S.ButtonWrapper>
                <SecondaryButton onClick={onRetry}>{content.buttonText}</SecondaryButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};
