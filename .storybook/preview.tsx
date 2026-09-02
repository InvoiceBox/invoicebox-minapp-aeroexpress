import React from 'react';
import type { Preview } from '@storybook/react';
import { PaletteProvider, defaultAbstractPalette } from '@invoicebox/ui';

const preview: Preview = {
    decorators: [
        (Story) => (
            <PaletteProvider abstract={defaultAbstractPalette}>
                <Story />
            </PaletteProvider>
        ),
    ],
    parameters: {
        backgrounds: { default: 'light', values: [{ name: 'light', value: '#ffffff' }] },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
