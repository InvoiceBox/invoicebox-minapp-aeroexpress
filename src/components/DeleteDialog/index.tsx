import React, { FC, Fragment, MouseEvent, useCallback } from 'react';
import { Button } from 'src/components';
import { useMobile } from 'src/hooks';
import { Dialog } from 'src/stories/common/Dialog';
import { useTheme } from 'styled-components';
import { useIntl } from 'react-intl';
import { Divider, SecondaryButton } from '@invoicebox/ui';
import * as S from './styles';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ReactComponent as DotIcon } from './assets/dot.svg';

export type TProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: (ids: string[]) => void;
    items: {
        id: string;
        title: string;
        count: string;
        date: string;
        amount: string;
    }[];
};

export const DeleteDialog: FC<TProps> = ({ isOpen, onClose, items, onDelete }) => {
    const isMobile = useMobile();
    const theme = useTheme();
    const intl = useIntl();

    const handleDelete = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const id = event.currentTarget.dataset.id as string;
            onDelete([id]);
        },
        [onDelete],
    );

    const handleDeleteAll = useCallback(() => {
        onDelete(items.map((item) => item.id));
    }, [onDelete, items]);

    return (
        <Dialog onClose={onClose} isOpen={isOpen} isErrorBorder={isMobile}>
            <S.Wrapper>
                <div>
                    {items.map(({ id, title, count, date, amount }, index) => (
                        <Fragment key={id}>
                            <S.Item>
                                <S.Header>
                                    <S.Title>{title}</S.Title>
                                    <S.CloseButton onClick={handleDelete} data-id={id}>
                                        <CloseIcon />
                                    </S.CloseButton>
                                </S.Header>
                                <S.Body>
                                    <S.Summary>
                                        <div>{count}</div>
                                        <S.Dot>
                                            <DotIcon />
                                        </S.Dot>
                                        <div>{date}</div>
                                    </S.Summary>
                                    <div>{amount}</div>
                                </S.Body>
                            </S.Item>
                            {index !== items.length - 1 && (
                                <S.Divider>
                                    <Divider
                                        palette={{
                                            divider: theme.body.colors.primary(0.1),
                                        }}
                                    />
                                </S.Divider>
                            )}
                        </Fragment>
                    ))}
                </div>
                <S.Buttons>
                    <Button type="primary" onClick={onClose}>
                        {intl.formatMessage({
                            id: 'Закрыть',
                            defaultMessage: 'Закрыть',
                        })}
                    </Button>
                    <SecondaryButton onClick={handleDeleteAll}>
                        {intl.formatMessage({
                            id: 'Удалить все',
                            defaultMessage: 'Удалить все',
                        })}
                    </SecondaryButton>
                </S.Buttons>
            </S.Wrapper>
        </Dialog>
    );
};
