import { Typography, defaultAbstractPalette } from '@invoicebox/ui';
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

export const Wrapper = styled(Typography)`
    color: ${hexToRgba(defaultAbstractPalette.primary, 0.5)};

    a {
        text-decoration: underline;
        cursor: pointer;
        color: inherit;
    }
`;
