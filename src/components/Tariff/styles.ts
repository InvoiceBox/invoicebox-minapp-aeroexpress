import { Typography, breakpoints, defaultAbstractPalette } from '@invoicebox/ui';
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 24px;
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 24px;
        background-color: #df1931;
    }

    @media ${breakpoints.sm} {
        padding-left: 22px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding-bottom: 14px;
`;

export const Title = styled(Typography)`
    color: ${defaultAbstractPalette.primary};
`;

export const Sum = styled(Typography)`
    color: ${defaultAbstractPalette.primary};
`;

export const Description = styled(Typography)`
    color: ${hexToRgba(defaultAbstractPalette.primary, 0.5)};
`;
