import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-links'],
    framework: {
        name: 'storybook-react-rsbuild',
        options: {},
    },
    staticDirs: ['../public'],
};
export default config;
