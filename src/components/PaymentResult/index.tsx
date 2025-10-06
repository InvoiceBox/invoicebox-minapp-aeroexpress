import { FC } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { SecondaryButton, Typography } from '@invoicebox/ui';
import * as S from './styles';

export type TProps = {
    status: TPaymentStatus | null;
    onRetry?: () => void;
};

export const PaymentResult: FC<TProps> = ({ status, onRetry }) => {
    if (!status)   return (
        <S.Wrapper>
            <S.Title>
                <Typography variant="headline3">
                   Ошибка
                </Typography>
            </S.Title>
            <S.Message>
                <Typography variant="bodyMRegular">
                   Неизвестный статус оплаты
                </Typography>
            </S.Message>
            <S.ButtonWrapper>
                <SecondaryButton onClick={onRetry}>
                    Назад
                </SecondaryButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );

    const getContent = () => {
        switch (status) {
            case 'paid':
                return {
                    title: 'Оплата прошла успешно!',
                    message: 'Ваш билет оплачен.',
                    buttonText: 'Оформить ещё',
                    buttonAction: onRetry,
                };
            case 'pending':
                return {
                    title: 'Оплата в обработке',
                    message: 'Платёж передан в обработку',
                    buttonText: 'Продолжить',
                    buttonAction: onRetry,
                };
            case 'canceled':
                return {
                    title: 'Оплата отменена',
                    message: 'Вы отменили оплату. Вы можете попробовать еще раз или продолжить оформление других билетов.',
                    buttonText: 'Попробовать еще раз',
                    buttonAction: onRetry,
                };
            default:
                return null;
        }
    };

    const content = getContent();
    if (!content) return null;

    return (
        <S.Wrapper>
            <S.Title>
                <Typography variant="headline3">
                    {content.title}
                </Typography>
            </S.Title>
            <S.Message>
                <Typography variant="bodyMRegular">
                    {content.message}
                </Typography>
            </S.Message>
            <S.ButtonWrapper>
                <SecondaryButton onClick={content.buttonAction}>
                    {content.buttonText}
                </SecondaryButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};
