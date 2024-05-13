import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 328px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        max-width: none;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: space-between;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.body.colors.primary()};
    ${({ theme }) => theme.helpers.getTypography('caption')};
`;

export const CloseButton = styled.button.attrs({ type: 'button' })`
    display: flex;

    :hover {
        opacity: 0.8;
    }
`;

export const Body = styled.div`
    color: ${({ theme }) => theme.body.colors.primary(0.3)};
    ${({ theme }) => theme.helpers.getTypography('caption')};
    display: flex;
    justify-content: space-between;
    gap: 6px;
`;

export const Summary = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const Dot = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
`;

export const Divider = styled.div`
    padding: 12px 0;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 17px;
    justify-content: space-between;
`;
