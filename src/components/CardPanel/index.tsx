import React, { FC, useCallback } from 'react';
import { Circle } from 'src/stories/common/Circle';
import { ReactComponent as Dot } from './assets/dot.svg';
import { ReactComponent as Minus } from './assets/minus.svg';
import { ReactComponent as Plus } from './assets/plus.svg';
import * as S from './styles';

export type TProps = {
    id: number;
    amount: string;
    count: string;
    onMinus: (id: number) => void;
    onPlus: (id: number) => void;
};

export const CardPanel: FC<TProps> = ({ id, amount, count, onMinus, onPlus }) => {
    const handleMinus = useCallback(() => onMinus(id), [onMinus, id]);
    const handlePlus = useCallback(() => onPlus(id), [onPlus, id]);

    return (
        <S.Wrapper>
            <S.Summary>
                <S.Amount>{amount}</S.Amount>
                <S.Dot>
                    <Dot />
                </S.Dot>
                <S.Count>{count}</S.Count>
            </S.Summary>
            <S.Actions>
                <S.Circle onClick={handleMinus}>
                    <Circle size={36}>
                        <Minus />
                    </Circle>
                </S.Circle>
                <S.Circle onClick={handlePlus}>
                    <Circle size={36}>
                        <Plus />
                    </Circle>
                </S.Circle>
            </S.Actions>
        </S.Wrapper>
    );
};
