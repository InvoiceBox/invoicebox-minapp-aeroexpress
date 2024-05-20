import { useCallback } from 'react';
import { TInitialData } from '../../../hooks/useInitialData';
import { TEvents } from '../../../hooks/useEvents';
import { TCreateOrderRequest } from '../../../../../network/http';
import { TOutterForm } from '../../../../../components/Form/types';

export const useSubmitHandler = (
    initialData: TInitialData,
    onDone: TEvents['handleDone'],
    onError: TEvents['handleError'],
    createOrder: TCreateOrderRequest,
) => {
    const handleSubmit = useCallback(
        async (form: TOutterForm) => {
            const { orderContainerId, userName, userEmail, userPhone } = initialData;
            await createOrder({
                ...form,
                orderContainerId,
                firstName: userName,
                email: userEmail,
                phone: userPhone,
            })
                .then((response) => {
                    onDone(response.url);
                })
                .catch(() => onError());
        },
        [onDone, onError, initialData, createOrder],
    );

    return handleSubmit;
};
