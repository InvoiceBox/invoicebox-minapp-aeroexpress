import React, { FC, useMemo } from 'react';
import DOMPurify from 'dompurify';
import * as S from './styles';

export type TProps = {
    title: string;
    sum: number;
    descripion: string;
};

export const Tariff: FC<TProps> = ({ title, sum, descripion }) => {
    // Описание приходит с API с HTML-разметкой (<font>, <br>) — санитайзер
    // обязателен: без него это XSS-поверхность, зависящая от доверия к бэкенду.
    const sanitizedDescription = useMemo(() => DOMPurify.sanitize(descripion), [descripion]);

    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.Title variant="headline3">{title}</S.Title>
                <S.Sum variant="headline6">{sum} ₽</S.Sum>
            </S.TitleWrapper>
            <S.Description
                variant="bodyMRegular"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
        </S.Wrapper>
    );
};
