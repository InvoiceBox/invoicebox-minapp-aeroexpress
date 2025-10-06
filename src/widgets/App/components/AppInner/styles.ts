import { defaultAbstractPalette, Typography } from '@invoicebox/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${defaultAbstractPalette.base};
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const LoaderContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 48px 24px;
    text-align: center;
`;

export const LoadingStatus = styled(Typography)`
    color: ${defaultAbstractPalette.primary};
    margin-top: 24px;
`;
