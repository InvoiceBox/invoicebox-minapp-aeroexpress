import { Typography } from '@invoicebox/ui';
import styled from 'styled-components';

export const Wrapper = styled(Typography)`
    color: ${({ theme }) => theme.body.colors.primary()};
`;
