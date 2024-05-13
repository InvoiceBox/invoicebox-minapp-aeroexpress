import { Typography } from 'src/components';
import styled from 'styled-components';

export const Title = styled(Typography)`
    margin-bottom: 6px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        text-align: center;
        margin-bottom: 14px;
    }
`;

export const Description = styled(Typography)`
    margin-bottom: 24px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        text-align: center;
        margin-bottom: 52px;
        color: ${({ theme }) => theme.body.colors.primary(0.5)};
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        flex-direction: column-reverse;
    }
`;
