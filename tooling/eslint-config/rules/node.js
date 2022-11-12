import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';

export const node = {
  languageOptions: {
    globals: globals.nodeBuiltin,
  },
  plugins: {
    n: nodePlugin,
  },
  rules: {
    // Disable core rules
    'no-console': 'off',

    // Possible Errors
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'off',
    'n/no-exports-assign': 'off',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'off',
    'n/no-missing-import': 'error',
    'n/no-missing-require': 'off',
    'n/no-new-require': 'off',
    'n/no-path-concat': 'error',
    'n/no-process-exit': 'off', // unicorn/no-process-exit
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': 'error',
    'n/no-unpublished-require': 'off',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'error',

    // Best Practices
    'n/no-deprecated-api': 'error',

    // Stylistic Issues
    'n/callback-return': 'off',
    'n/exports-style': 'off',
    'n/file-extension-in-import': 'off',
    'n/global-require': 'off',
    'n/no-mixed-requires': 'off',
    'n/no-process-env': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',
  },
};
