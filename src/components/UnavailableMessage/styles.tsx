import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 8px 16px;
    text-align: right;
    ${({ theme }) => theme.helpers.getTypography('button')};
    color: ${({ theme }) => theme.body.colors.primary()};
`;
