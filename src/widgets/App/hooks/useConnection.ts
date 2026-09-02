import { useEffect } from 'react';
import { getMinapp } from '../../../minappClient';

export const useConnection = () => {
    useEffect(() => {
        const minapp = getMinapp();
        minapp.connect();
        return () => {
            minapp.disconnect();
        };
    }, []);
};
