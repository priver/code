import { Editor } from '@priver/editor';

import preview from '#.storybook/preview.ts';

const meta = preview.meta({
  title: 'Editor/Editor',
  component: Editor,
});

/**
 * Interactive playground to test different editor configurations.
 * Use the controls panel to experiment with different props.
 */
export const Playground = meta.story();
