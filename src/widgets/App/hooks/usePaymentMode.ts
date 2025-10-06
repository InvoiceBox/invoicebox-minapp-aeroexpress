import { useState } from 'react';

export type PaymentMode = 'done' | 'checkout';

export const usePaymentMode = (defaultMode: PaymentMode = 'checkout') => {
    const [paymentMode, setPaymentMode] = useState<PaymentMode>(defaultMode);

    return {
        paymentMode,
        setPaymentMode,
        isDoneMode: paymentMode === 'done',
        isCheckoutMode: paymentMode === 'checkout',
    };
};
