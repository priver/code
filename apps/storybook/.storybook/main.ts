import { createRequire } from 'node:module';
import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
  framework: getAbsolutePath('@storybook/react-vite'),
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  addons: [getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@storybook/addon-a11y')],
};
export default config;
