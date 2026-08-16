import { defineConfig } from 'oxfmt';

export default defineConfig({
  singleQuote: true,
  quoteProps: 'consistent',
  proseWrap: 'always',
  jsdoc: true,
  sortImports: {
    ignoreCase: false,
    internalPattern: ['@priver/'],
    groups: [
      'builtin',
      'external',
      'internal',
      'subpath',
      ['parent', 'sibling', 'index'],
      'style',
      'unknown',
    ],
  },
});
