import { useCallback } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TInitialData } from '../../../hooks/useInitialData';
import { TEvents } from '../../../hooks/useEvents';
import { createOrderRequest } from '../../../../../network/http';
import { TOutterForm } from '../../../../../components/Form/types';

export const useSubmitHandler = (
    initialData: TInitialData,
    onDone: TEvents['handleDone'],
    onError: TEvents['handleError'],
) => {
    const handleDone = useUnupdatableHandler(onDone);
    const handleError = useUnupdatableHandler(onError);

    const handleSubmit = useCallback(
        async (form: TOutterForm) => {
            const { orderContainerId, userName, userEmail, userPhone } = initialData;
            await createOrderRequest({
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
        [handleDone, handleError, initialData],
    );

    return handleSubmit;
};
