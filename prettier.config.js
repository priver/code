/**
 * @type {import('prettier').Config &
 *   import('@ianvs/prettier-plugin-sort-imports').PluginConfig &
 *   import('prettier-plugin-jsdoc').Options}
 */
const config = {
  experimentalTernaries: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
  proseWrap: 'always',

  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-jsdoc'],

  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@priver/',
    '',
    '^@/',
    '^(?!.*\\.css\\.ts$)\\.\\.\\/.*$',
    '^(?!.*\\.css\\.ts$)\\.\\/.*$',
    '\\.css\\.ts$',
  ],
  importOrderTypeScriptVersion: '5.1.6',

  // prettier-plugin-jsdoc
  tsdoc: true,
};

export default config;
