import confusingBrowserGlobals from 'confusing-browser-globals';
import type { Linter } from 'eslint';
import compat from 'eslint-plugin-compat';
import globals from 'globals';

export const browser = {
  name: 'priver/browser',
  languageOptions: {
    globals: {
      ...globals.es2025,
      ...globals.browser,
    },
  },
  plugins: {
    compat,
  },
  rules: {
    'no-restricted-globals': [
      'error',
      ...confusingBrowserGlobals,
      {
        name: 'atob',
        message:
          'This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.',
      },
      {
        name: 'btoa',
        message:
          'This API is deprecated. Use https://github.com/sindresorhus/uint8array-extras instead.',
      },
    ],
    'compat/compat': 'error',
  },
} as const satisfies Linter.Config;
