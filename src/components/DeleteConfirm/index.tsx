import React, { FC } from 'react';
import { Button } from 'src/components';
import { useMobile } from 'src/hooks';
import { Dialog } from 'src/stories/common/Dialog';
import { useIntl } from 'react-intl';
import { SecondaryButton } from '@invoicebox/ui';
import * as S from './styles';

export type TProps = {
    img?: string;
    onClose: () => void;
    onConfirm: () => void;
    isOpen: boolean;
};

export const DeleteConfirm: FC<TProps> = ({ onClose, isOpen, onConfirm, img }) => {
    const isMobile = useMobile();
    const intl = useIntl();

    return (
        <Dialog onClose={onClose} isOpen={isOpen} isErrorBorder={isMobile}>
            <S.Body>
                {img && (
                    <S.LogoWrapper>
                        <S.Logo src={img} alt="logo" />
                    </S.LogoWrapper>
                )}
                <div>
                    <S.Title variant="title2">
                        {intl.formatMessage({
                            id: 'Точно удалить услугу?',
                            defaultMessage: 'Точно удалить услугу?',
                        })}
                    </S.Title>
                    <S.Description variant="body">
                        {intl.formatMessage({
                            id: 'Если вы снова захотите добавить её, данные придётся вводить заново',
                            defaultMessage: 'Если вы снова захотите добавить её, данные придётся вводить заново',
                        })}
                    </S.Description>
                </div>
            </S.Body>
            <S.Buttons>
                <Button type="primary" onClick={onClose} fullWidth={isMobile}>
                    {intl.formatMessage({
                        id: 'Оставить услугу',
                        defaultMessage: 'Оставить услугу',
                    })}
                </Button>
                <SecondaryButton onClick={onConfirm} fullWidth={isMobile}>
                    {intl.formatMessage({
                        id: 'Всё равно удалить',
                        defaultMessage: 'Всё равно удалить',
                    })}
                </SecondaryButton>
            </S.Buttons>
        </Dialog>
    );
};
