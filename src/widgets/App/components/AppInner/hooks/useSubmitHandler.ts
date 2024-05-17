import { useCallback } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
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
    const handleDone = useUnupdatableHandler(onDone);
    const handleError = useUnupdatableHandler(onError);
    const handleCreateOrder = useUnupdatableHandler(createOrder);

    const handleSubmit = useCallback(
        async (form: TOutterForm) => {
            const { orderContainerId, userName, userEmail, userPhone } = initialData;
            await handleCreateOrder({
                ...form,
                orderContainerId,
                firstName: userName,
                email: userEmail,
                phone: userPhone,
            })
                .then((response) => {
                    handleDone(response.url);
                })
                .catch(() => handleError());
        },
        [handleDone, handleError, initialData, handleCreateOrder],
    );

    return handleSubmit;
};
