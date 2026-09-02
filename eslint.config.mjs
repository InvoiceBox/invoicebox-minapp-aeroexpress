import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
    { ignores: ['build', 'docs', 'storybook-static', 'node_modules'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    reactHooks.configs['recommended-latest'],
    prettier,
    {
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
    },
);
