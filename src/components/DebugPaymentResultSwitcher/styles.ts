import styled from 'styled-components';
import { defaultAbstractPalette } from '@invoicebox/ui';

export const DebugWrapper = styled.div`
    margin-bottom: 24px;
    padding: 16px;
    background-color: ${defaultAbstractPalette.neutralFoggy};
    border-radius: 8px;
`;

export const DebugLabel = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
`;

export const DebugSelect = styled.select`
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: ${defaultAbstractPalette.base};
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:focus {
        outline: none;
    }
`;
