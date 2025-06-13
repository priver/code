/** @type {import('prettier').Config} */
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

  plugins: ['@ianvs/prettier-plugin-sort-imports'],

  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@priver/(.*)$',
    '',
    '^#',
    '^[.][.]',
    '^[.]',
  ],
  importOrderCaseSensitive: true,
  importOrderTypeScriptVersion: '5.8.3',
};

export default config;
