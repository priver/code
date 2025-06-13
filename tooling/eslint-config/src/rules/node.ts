import type { Linter } from 'eslint';
import n from 'eslint-plugin-n';
import globals from 'globals';

export const node = {
  name: 'priver/node',
  languageOptions: {
    globals: {
      ...globals.es2025,
      ...globals.nodeBuiltin,
    },
  },
  plugins: {
    n,
  },
  rules: {
    // Disable core rules
    'no-console': 'off',

    // Rules
    'n/callback-return': 'off',
    'n/exports-style': 'off',
    'n/file-extension-in-import': 'off',
    'n/global-require': 'off',
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/hashbang': 'error',
    'n/no-callback-literal': 'off',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'off', // import-x/no-extraneous-dependencies
    'n/no-extraneous-require': 'off', // import-x/no-extraneous-dependencies
    'n/no-missing-import': 'off', // import-x/unresolved
    'n/no-missing-require': 'off', // import-x/unresolved
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'off',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off', // unicorn/no-process-exit
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/no-top-level-await': 'off',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-node-protocol': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
    'n/process-exit-as-throw': 'error',
  },
} as const satisfies Linter.Config;
