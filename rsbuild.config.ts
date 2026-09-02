import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    source: {
        entry: {
            index: './src/index.tsx',
            tariffs: './src/tariffs.tsx',
        },
        // Явный define: без него незаданная при сборке переменная НЕ подменяется,
        // в браузерном бандле остаётся голый process.env.* -> ReferenceError: process
        // is not defined, мини-апп падает до init (I21-670, инцидент на stage).
        define: {
            'process.env.PUBLIC_API_ENV': JSON.stringify(process.env.PUBLIC_API_ENV ?? ''),
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
