import jestPlugin from 'eslint-plugin-jest';
import * as jestFormattingPlugin from 'eslint-plugin-jest-formatting';

export const jest = {
  languageOptions: {
    globals: jestPlugin.environments.globals.globals,
  },
  plugins: {
    'jest': jestPlugin,
    'jest-formatting': jestFormattingPlugin,
  },
  rules: {
    // Jest
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/expect-expect': 'error',
    'jest/max-expects': 'off',
    'jest/max-nested-describe': 'off',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'error',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-done-callback': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': 'off',
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-jest-methods': 'off',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'off',
    'jest/no-test-return-statement': 'error',
    'jest/no-untyped-mock-factory': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-assertions': ['error', { onlyFunctionsWithAsyncKeyword: true }],
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-snapshot-hint': 'error',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-hook': 'error',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'error',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect': ['error', { alwaysAwait: true }],
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',

    // TypeScript
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': 'error',

    // Jest Formatting
    'jest-formatting/padding-around-all': 'off',
    'jest-formatting/padding-around-after-all-blocks': 'error',
    'jest-formatting/padding-around-after-each-blocks': 'error',
    'jest-formatting/padding-around-before-all-blocks': 'error',
    'jest-formatting/padding-around-before-each-blocks': 'error',
    'jest-formatting/padding-around-describe-blocks': 'error',
    'jest-formatting/padding-around-expect-groups': 'error',
    'jest-formatting/padding-around-test-blocks': 'error',
  },
};