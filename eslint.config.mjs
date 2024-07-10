import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import parser from 'vue-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/node_modules',
      '**/dist',
      '**/public',
      '**/assets',
      '**/dev-dist',
    ],
  },
  ...compat.extends(
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'vue/require-v-for-key': 'off',
      'vue/valid-v-for': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-model-argument': 'off',
    },
  },
];
