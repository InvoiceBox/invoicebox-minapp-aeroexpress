import styled from 'styled-components';
import banerUrl from './assets/baner.svg';

export const Wrapper = styled.div`
    min-height: 100vh;
    background: linear-gradient(0deg, #f1f2f6 0%, #f1f2f6 100%), #f8f8f8;
    padding-bottom: 24px;
`;

export const Baner = styled.div`
    background-image: url(${banerUrl});
    background-position: center top;
    height: 74px;

    @media ${breakpoints.sm} {
        display: none;
    }
`;

export const Content = styled.div`
    padding: 0 24px;
    margin: auto;
    max-width: 1388px;

    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 0 16px;
    }

    @media ${breakpoints.sm} {
        padding-top: 16px;
    }
`;
