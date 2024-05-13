import { Typography } from 'src/components';
import styled from 'styled-components';

export const Body = styled.div`
    max-width: 328px;
    display: flex;
    gap: 16px;
    padding: 8px 0;
    margin-bottom: 24px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        margin-bottom: 30px;
        max-width: none;
    }
`;

export const LogoWrapper = styled.div`
    flex-shrink: 0;
    max-width: 90px;
`;

export const Logo = styled.img`
    max-width: 100%;
`;

export const Title = styled(Typography)`
    margin-bottom: 6px;
`;

export const Description = styled(Typography)``;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        flex-direction: column-reverse;
    }
`;
