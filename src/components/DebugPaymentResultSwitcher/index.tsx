import React, { FC } from 'react';
import { TPaymentStatus } from '@invoicebox/minapp-sdk';
import * as S from './styles';

type TProps = {
    onDemoStatusChange: (status: TPaymentStatus | null) => void;
};

const DEMO_OPTIONS: { label: string; value: TPaymentStatus | 'null' }[] = [
    { label: 'Не имитировать', value: 'null' },
    { label: 'В обработке (pending)', value: 'pending' },
    { label: 'Оплачен (completed)', value: 'completed' },
    { label: 'Средства заблокированы (hold)', value: 'hold' },
    { label: 'Отменён (canceled)', value: 'canceled' },
    { label: 'Просрочен (expired)', value: 'expired' },
    { label: 'Неизвестен (unknown)', value: 'unknown' },
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
