import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.tsx',
            tariffs: './src/tariffs.tsx',
        },
    },
    html: {
        title: 'Aeroexpress Mini App',
        favicon: './public/favicon.svg',
        meta: {
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    output: {
        distPath: {
            root: 'build',
        },
    },
});
