import { Typography } from '@invoicebox/ui';
import styled from 'styled-components';

/* controls */

export enum LAYOUT_AREAS {
    date = 'date',
    tariff = 'tariff',
    count = 'count',
}

export const Controls = styled.div`
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    grid-template-rows: max-content;
    grid-template-areas: '${LAYOUT_AREAS.date} ${LAYOUT_AREAS.tariff} ${LAYOUT_AREAS.count}';
    gap: 20px;
    margin-bottom: 28px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-template-columns: 5fr 3fr;
        grid-template-rows: max-content max-content;
        grid-template-areas:
            '${LAYOUT_AREAS.date} ${LAYOUT_AREAS.count}'
            '${LAYOUT_AREAS.tariff} ${LAYOUT_AREAS.tariff}';
        gap: 16px 12px;
        margin-bottom: 16px;
    }
`;

export const DateWrapper = styled.div`
    grid-area: ${LAYOUT_AREAS.date};
`;

export const IconWrappr = styled.a`
    padding-top: 10px;
    display: flex;
    align-items: center;
`;

export const TariffWrapper = styled.div`
    grid-area: ${LAYOUT_AREAS.tariff};
    display: flex;
    gap: 4px;
`;

export const CountWrapper = styled.div`
    grid-area: ${LAYOUT_AREAS.count};
`;

/* other */

export const Description = styled(Typography)`
    color: ${({ theme }) => theme.body.colors.primary(0.5)};
    padding-bottom: 20px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        padding-bottom: 16px;
    }
`;

export const DividerWrapper = styled.div`
    margin-bottom: 21px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        display: none;
    }
`;

export const SummaryWrapper = styled.div`
    margin-bottom: 21px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    column-gap: 30px;

    @media ${({ theme }) => theme.breakpoints.sm} {
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 8px;
        column-gap: 4px;
        margin-bottom: 16px;
    }
`;

export const Total = styled(Typography)<{ $isSum: boolean }>`
    display: none;
    color: ${({ theme }) => theme.body.colors.primary()};

    @media ${({ theme }) => theme.breakpoints.sm} {
        display: ${({ $isSum }) => ($isSum ? 'block' : 'none')};
    }
`;

export const SumWrapper = styled.div<{ $isSum: boolean }>`
    flex-shrink: 0;

    @media ${({ theme }) => theme.breakpoints.sm} {
        display: ${({ $isSum }) => ($isSum ? 'block' : 'none')};
    }
`;

export const CaptionWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.sm} {
        width: 100%;
    }
`;
