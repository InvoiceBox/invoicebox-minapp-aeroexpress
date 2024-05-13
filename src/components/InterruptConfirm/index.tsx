import React, { FC } from 'react';
import { Button } from 'src/components';
import { useMobile } from 'src/hooks';
import { Dialog } from 'src/stories/common/Dialog';
import { useIntl } from 'react-intl';
import { SecondaryButton } from '@invoicebox/ui';
import * as S from './styles';

export type TProps = {
    onClose: () => void;
    onConfirm: () => void;
    isOpen: boolean;
};

export const InterruptConfirm: FC<TProps> = ({ onClose, isOpen, onConfirm }) => {
    const isMobile = useMobile();
    const intl = useIntl();

    return (
        <Dialog onClose={onClose} isOpen={isOpen} isErrorBorder={isMobile}>
            <S.Title variant="title2">
                {intl.formatMessage({
                    id: 'Вы не добавили услугу',
                    defaultMessage: 'Вы не добавили услугу',
                })}
            </S.Title>
            <S.Description variant="body">
                {intl.formatMessage({
                    id: 'Хотите отменить добавление услуги в заказ?',
                    defaultMessage: 'Хотите отменить добавление услуги в заказ?',
                })}
            </S.Description>
            <S.Buttons>
                <SecondaryButton onClick={onClose} fullWidth={isMobile}>
                    {intl.formatMessage({
                        id: 'Продолжить оформление услуги',
                        defaultMessage: 'Продолжить оформление услуги',
                    })}
                </SecondaryButton>
                <Button type="primary" onClick={onConfirm} fullWidth={isMobile}>
                    {intl.formatMessage({
                        id: 'Да',
                        defaultMessage: 'Да',
                    })}
                </Button>
            </S.Buttons>
        </Dialog>
    );
};
