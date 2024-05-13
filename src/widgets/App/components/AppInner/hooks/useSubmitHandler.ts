import { useCallback } from 'react';
import { createOrderRequest } from 'src/store/Aeroexpress/http';
import { useUnupdatableHandler } from 'src/hooks/useUnupdatableHandler';
import { TOutterForm } from 'src/stories/miniApps/aeroexpress/components/Form/types';
import { TInitialData } from '../../../hooks/useInitialData';
import { TEvents } from '../../../hooks/useEvents';

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
                    handleDone(response.data.url);
                })
                .catch(() => handleError());
        },
        [handleDone, handleError, initialData],
    );

    return handleSubmit;
};
