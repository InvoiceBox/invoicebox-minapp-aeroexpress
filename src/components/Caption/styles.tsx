import { Typography } from '@invoicebox/ui';
import styled from 'styled-components';

export const Wrapper = styled(Typography)`
    color: ${({ theme }) => theme.body.colors.primary(0.5)};

    a {
        text-decoration: underline;
        cursor: pointer;
        color: inherit;
    }
`;
