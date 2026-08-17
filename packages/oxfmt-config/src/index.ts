import { defineConfig } from 'oxfmt';

export default defineConfig({
  jsdoc: true,
  proseWrap: 'always',
  quoteProps: 'consistent',
  singleQuote: true,
  sortImports: {
    ignoreCase: false,
  },
});
