import styled from 'styled-components';

export const Wrapper = styled.div<{ $isActive: boolean }>`
    border-radius: ${({ theme }) => theme.decorations.borderRadius.base}px;
    padding: 16px;
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    border-color: ${({ theme, $isActive }) =>
        $isActive ? theme.body.colors.primary() : theme.body.colors.primary(0.3)}; }
`;

export const BodyWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-grow: 1;
`;

export const TextsWrapper = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LogoWrapper = styled.div`
    flex-shrink: 0;

    > img {
        max-width: 48px;
    }
`;

export const Title = styled.div`
    ${({ theme }) => theme.helpers.getTypography('body')}
    color: ${({ theme }) => theme.body.colors.primary()};
`;

export const Description = styled.div`
    ${({ theme }) => theme.helpers.getTypography('body')}
    color: ${({ theme }) => theme.body.colors.heavyNeutral()};
`;
