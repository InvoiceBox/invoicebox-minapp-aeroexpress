import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const Summary = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
`;

export const Amount = styled.div`
    color: ${({ theme }) => theme.body.colors.primary()};
    ${({ theme }) => theme.helpers.getTypography('title3')};
`;

export const Dot = styled.div`
    padding: 4px;
    display: flex;
    align-items: center;
`;

export const Count = styled.div`
    color: ${({ theme }) => theme.body.colors.primary(0.5)};
    ${({ theme }) => theme.helpers.getTypography('title3')};
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Circle = styled.button.attrs({ type: 'button' })`
    :hover {
        opacity: 0.8;
    }
`;
