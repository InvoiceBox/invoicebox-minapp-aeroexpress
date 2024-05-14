import { breakpoints } from '@invoicebox/ui';
import { useMediaQuery } from 'react-responsive';

export const useMobile = () => useMediaQuery({ query: breakpoints.sm });
