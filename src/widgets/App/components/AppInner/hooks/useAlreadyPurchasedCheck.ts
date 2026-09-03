import { useEffect } from 'react';
import { useUnupdatableHandler } from '@invoicebox/ui';
import { TEvents } from '../../../hooks/useEvents';
import { getMinapp } from '../../../../../minappClient';
import { isAeroexpressAlreadyInBasket } from '../../../../../logic/alreadyPurchased';

// Билет Аэроэкспресса уже есть в позициях счёта (куплен на стороне мерчанта,
// например вместе с авиабилетом) — предлагать услугу повторно не нужно.
export const useAlreadyPurchasedCheck = (
    onUnavailable: TEvents['handleUnavailable'],
    isSuborder: boolean,
) => {
    const handleUnavailable = useUnupdatableHandler(onUnavailable);

    useEffect(() => {
        if (!isSuborder) return;
        getMinapp()
            .getBasketItems()
            .then((basketItems) => {
                if (isAeroexpressAlreadyInBasket(basketItems)) handleUnavailable();
            })
            .catch(() => {});
    }, [isSuborder, handleUnavailable]);
};
