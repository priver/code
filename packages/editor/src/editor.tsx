import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import {
  $isTextNode,
  ParagraphNode,
  TextNode,
  isHTMLElement,
  type DOMConversionMap,
  type DOMExportOutput,
  type DOMExportOutputMap,
  type Klass,
  type LexicalEditor,
  type LexicalNode,
} from 'lexical';

import ToolbarPlugin from './plugins/toolbar-plugin.tsx';

const placeholder = 'Enter some rich text...';

const MIN_ALLOWED_FONT_SIZE = 8;
const MAX_ALLOWED_FONT_SIZE = 72;

function parseAllowedFontSize(input: string): string {
  const match = /^(\d+(?:\.\d+)?)px$/u.exec(input);
  if (match) {
    const n = Number(match[1]);
    if (n >= MIN_ALLOWED_FONT_SIZE && n <= MAX_ALLOWED_FONT_SIZE) {
      return input;
    }
  }
  return '';
}

function parseAllowedColor(input: string) {
  return /^rgb\(\d+, \d+, \d+\)$/u.test(input) ? input : '';
}

function removeStylesExportDOM(editor: LexicalEditor, target: LexicalNode): DOMExportOutput {
  const output = target.exportDOM(editor);
  if (isHTMLElement(output.element)) {
    // Remove all inline styles and classes if the element is an HTMLElement
    // Children are checked as well since TextNode can be nested
    // in i, b, and strong tags.
    for (const el of [output.element, ...output.element.querySelectorAll('[style],[class]')]) {
      el.removeAttribute('class');
      el.removeAttribute('style');
    }
  }
  return output;
}

const exportMap: DOMExportOutputMap = new Map<
  Klass<LexicalNode>,
  (editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
  [ParagraphNode, removeStylesExportDOM],
  [TextNode, removeStylesExportDOM],
]);

function getExtraStyles(element: HTMLElement): string {
  // Parse styles from pasted input, but only if they match exactly the
  // sort of styles that would be produced by exportDOM
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== '' && fontSize !== '15px') {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== '' && color !== 'rgb(0, 0, 0)') {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
}

function constructImportMap(): DOMConversionMap {
  const importMap: DOMConversionMap = {};

  // Wrap all TextNode importers with a function that also imports
  // the custom styles implemented by the playground
  for (const [tag, fn] of Object.entries(TextNode.importDOM() ?? {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) {
        return null;
      }
      return {
        ...importer,
        conversion(element) {
          const output = importer.conversion(element);
          if (
            output?.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild(child, parent) {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }

  return importMap;
}

const theme = {
  code: 'relative mx-0 my-2 block overflow-x-auto bg-neutral-200 p-2 pb-12 font-mono text-sm tab-2',
  link: 'color-accent-500',
  paragraph: 'relative m-0 mb-2 last:mb-0',
  placeholder:
    'pointer-events-none absolute top-4 left-2 inline-block overflow-hidden text-base text-ellipsis text-neutral-500 select-none',
  quote: 'm-0 ms-5 border-l-4 border-neutral-200 pl-4 text-base text-neutral-600',
  text: {
    bold: 'font-bold',
    code: 'bg-neutral-200 px-1 py-px font-mono text-sm',
    hashtag: 'editor-text-hashtag',
    italic: 'italic',
    overflowed: 'editor-text-overflowed',
    strikethrough: 'line-through',
    underline: 'underline',
    underlineStrikethrough: 'underline-strikethrough',
  },
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  throw error;
}

const editorConfig = {
  html: {
    export: exportMap,
    import: constructImportMap(),
  },
  namespace: 'MyEditor',
  nodes: [ParagraphNode, TextNode],
  onError,
  theme,
};

export function Editor(): React.ReactNode {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative mx-auto my-5 max-w-xl rounded-sm rounded-t-lg text-left font-normal text-black">
        <ToolbarPlugin />
        <div className="relative bg-white">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="tab-size-1 relative min-h-40 resize-none px-2 py-4 text-base caret-neutral-700 outline-none"
                aria-placeholder={placeholder}
                placeholder={
                  <div className="pointer-events-none absolute top-4 left-2 inline-block overflow-hidden text-base text-ellipsis text-neutral-500 select-none">
                    {placeholder}
                  </div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          {/* <TreeViewPlugin /> */}
        </div>
      </div>
    </LexicalComposer>
  );
}
