import { FC } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import { SecondaryButton, Typography } from '@invoicebox/ui';
import * as S from './styles';

export type TProps = {
    status: TPaymentStatus | null;
    onRetry?: () => void;
};

export const PaymentResult: FC<TProps> = ({ status, onRetry }) => {
    if (!status)
        return (
            <S.Wrapper>
                <S.Title>
                    <Typography variant="headline3">Ошибка</Typography>
                </S.Title>
                <S.Message>
                    <Typography variant="bodyMRegular">Неизвестный статус оплаты</Typography>
                </S.Message>
                <S.ButtonWrapper>
                    <SecondaryButton onClick={onRetry}>Назад</SecondaryButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        );

    const getContent = () => {
        switch (status) {
            case 'pending':
                return {
                    title: 'Оплата в обработке',
                    message: 'Платёж передан в обработку',
                    buttonText: 'Продолжить',
                    buttonAction: onRetry,
                };
            case 'completed':
                return {
                    title: 'Оплата прошла успешно!',
                    message: 'Ваш билет оплачен. Вы можете оформить новый билет, либо выйти из модуля оплаты.',
                    buttonText: 'Оформить ещё',
                    buttonAction: onRetry,
                };
            case 'canceled':
                return {
                    title: 'Оплата отменена',
                    message:
                        'Вы отменили оплату. Вы можете попробовать еще раз или продолжить оформление других билетов.',
                    buttonText: 'Попробовать еще раз',
                    buttonAction: onRetry,
                };
            case 'expired':
                return {
                    title: 'Истёк срок оплаты билета',
                    message: 'Срок оплаты счёта истёк, оплата счёта невозможна',
                    buttonText: 'Оформить новый билет',
                    buttonAction: onRetry,
                };
            case 'hold':
                return {
                    title: 'Платёж обрабатывается',
                    message: 'По счёту осуществляется удержание средств (блокировка средств)',
                    buttonText: 'Оформить ещё',
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
                <Typography variant="headline3">{content.title}</Typography>
            </S.Title>
            <S.Message>
                <Typography variant="bodyMRegular">{content.message}</Typography>
            </S.Message>
            <S.ButtonWrapper>
                <SecondaryButton onClick={content.buttonAction}>{content.buttonText}</SecondaryButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};
