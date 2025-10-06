import { defaultAbstractPalette } from '@invoicebox/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${defaultAbstractPalette.base};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
`;

export const Title = styled.div`
    margin-bottom: 16px;
`;

export const Message = styled.div`
    margin-bottom: 32px;
    color: ${defaultAbstractPalette.primary};
    line-height: 1.5;
    max-width: 600px;
`;

export const ButtonWrapper = styled.div`
    margin-top: 16px;
`;
