import React, { FC } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import * as S from './styles';

type TProps = {
    onDemoStatusChange: (status: TPaymentStatus | null) => void;
};

const DEMO_OPTIONS: { label: string; value: TPaymentStatus | 'null' }[] = [
    { label: 'Не имитировать', value: 'null' },
    { label: 'Успех', value: 'completed' },
    { label: 'В обработке', value: 'pending' },
    { label: 'Холд', value: 'hold' },
    { label: 'Отмена', value: 'canceled' },
    { label: 'Истёк', value: 'expired' },
    { label: 'Неизвестен', value: 'unknown' },
];

export const DebugPaymentResultSwitcher: FC<TProps> = ({ onDemoStatusChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const status = event.target.value === 'null' ? null : (event.target.value as TPaymentStatus);
        onDemoStatusChange(status);
    };

    return (
        <S.DebugWrapper>
            <S.DebugLabel>[DEV] Имитация результата платежа</S.DebugLabel>
            <S.DebugSelect onChange={handleChange}>
                {DEMO_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </S.DebugSelect>
        </S.DebugWrapper>
    );
};
