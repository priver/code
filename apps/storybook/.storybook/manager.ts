import { addons } from 'storybook/manager-api';

import theme from './theme.ts';

import '@fontsource-variable/inter/opsz.css';
import '@fontsource-variable/jetbrains-mono';

addons.setConfig({ theme });
