import { defineConfig } from 'oxfmt';

import config from '@priver/oxfmt-config';

export default defineConfig({
  ...config,
  ignorePatterns: ['**/*.html', 'pnpm-lock.yaml', '.agents/skills/'],
  sortTailwindcss: {
    stylesheet: './packages/ui/src/style.css',
    functions: ['cva', 'cx'],
  },
  overrides: [
    {
      files: ['**/CHANGELOG.md', '.changeset/*.md'],
      options: { proseWrap: 'preserve' },
    },
  ],
});
