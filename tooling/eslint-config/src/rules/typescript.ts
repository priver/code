import type { ESLint, Linter } from 'eslint';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import * as tseslint from 'typescript-eslint';

const typeScriptExtensions = ['.ts', '.tsx', '.cts', '.mts'] as const;
const allExtensions = [...typeScriptExtensions, '.js', '.cjs', '.mjs'] as const;

export const typescript = {
  name: 'priver/typescript',
  languageOptions: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    parser: tseslint.parser as Linter.Parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    '@typescript-eslint': tseslint.plugin as ESLint.Plugin,
  },
  settings: {
    'import-x/extensions': allExtensions,
    'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import-x/parsers': {
      '@typescript-eslint/parser': [...typeScriptExtensions],
    },
    'import-x/resolver-next': [createTypeScriptImportResolver()],
  },
  rules: {
    // Disable base rules
    'consistent-return': 'off', // ts(2366) & ts(2322)
    'constructor-super': 'off', // ts(2335) & ts(2377)
    'getter-return': 'off', // ts(2378)
    'no-class-assign': 'off', // ts(2629)
    'no-const-assign': 'off', // ts(2588)
    'no-dupe-args': 'off', // ts(2300)
    'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
    'no-dupe-keys': 'off', // ts(1117)
    'no-func-assign': 'off', // ts(2630)
    'no-import-assign': 'off', // ts(2632) & ts(2540)
    'no-new-native-nonconstructor': 'off', // ts(7009)
    'no-obj-calls': 'off', // ts(2349)
    'no-redeclare': 'off', // ts(2451)
    'no-setter-return': 'off', // ts(2408)
    'no-this-before-super': 'off', // ts(2376) & ts(17009)
    'no-undef': 'off', // ts(2304) & ts(2552)
    'no-unreachable': 'off', // ts(7027)
    'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
    'no-unused-vars': 'off', // ts(6133)
    'no-with': 'off', // ts(1101) & ts(2410)
    'import-x/named': 'off', // ts(2724)
    'import-x/no-unresolved': 'off', // ts(2307)

    // TypeScript might have features not supported in a specific Node.js version.
    // 'node/no-unsupported-features/es-syntax': 'off',
    // 'node/no-unsupported-features/es-builtins': 'off',

    'camelcase': 'off', // @typescript-eslint/naming-convention
    'default-case': 'off', // @typescript-eslint/switch-exhaustiveness-check
    'default-param-last': 'off', // @typescript-eslint/default-param-last
    'dot-notation': 'off', // @typescript-eslint/dot-notation
    'no-array-constructor': 'off', // @typescript-eslint/no-array-constructor
    'no-constant-condition': 'off', // @typescript-eslint/no-unnecessary-condition
    'no-implied-eval': 'off', // @typescript-eslint/no-implied-eval
    'no-loop-func': 'off', // @typescript-eslint/no-loop-func
    'no-shadow': 'off', // @typescript-eslint/no-shadow
    'no-throw-literal': 'off', // @typescript-eslint/only-throw-error
    'no-unused-expressions': 'off', // @typescript-eslint/no-unused-expressions
    'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
    'prefer-destructuring': 'off', // @typescript-eslint/prefer-destructuring
    'prefer-promise-reject-errors': 'off', // @typescript-eslint/prefer-promise-reject-errors
    'import-x/no-deprecated': 'off', // @typescript-eslint/no-deprecated

    // Rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/class-methods-use-this': 'off',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-return': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        arrayLiteralTypeAssertions: 'never',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'off', // verbatimModuleSyntax
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { constructors: 'no-public' },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/init-declarations': 'off',
    '@typescript-eslint/max-params': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: ['classProperty', 'function', 'import', 'parameter'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'parameter',
        modifiers: ['unused'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],
        format: null,
      },
      {
        selector: ['class', 'enum', 'interface', 'typeAlias'],
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-deprecated': 'warn',
    '@typescript-eslint/no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-misused-spread': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-types': [
      'error',
      {
        types: {
          object: {
            message:
              'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
            fixWith: 'Record<string, unknown>',
          },
          null: {
            message: 'Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7',
            fixWith: 'undefined',
          },
          Buffer: {
            message:
              'Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer',
            suggest: ['Uint8Array'],
          },
        },
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-type-conversion': 'error',
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/only-throw-error': 'error',
    '@typescript-eslint/parameter-properties': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-find': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false,
      },
    ],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': [
      'error',
      {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'never',
        lib: 'never',
      },
    ],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
  },
} as const satisfies Linter.Config;
