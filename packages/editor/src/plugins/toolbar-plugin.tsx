import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_LOW,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  RedoIcon,
  StrikethroughIcon,
  UnderlineIcon,
  UndoIcon,
} from 'lucide-react';
import * as React from 'react';

function Divider() {
  return <div className="mx-1 w-px bg-neutral-200" />;
}

export default function ToolbarPlugin(): React.ReactNode {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = React.useRef(null);
  const [canUndo, setCanUndo] = React.useState(false);
  const [canRedo, setCanRedo] = React.useState(false);
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);

  const $updateToolbar = React.useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
    }
  }, []);

  React.useEffect(
    () =>
      mergeRegister(
        editor.registerUpdateListener(({ editorState }) => {
          editorState.read(
            () => {
              $updateToolbar();
            },
            { editor },
          );
        }),
        editor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          (_payload, _newEditor) => {
            $updateToolbar();
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
        editor.registerCommand(
          CAN_UNDO_COMMAND,
          (payload) => {
            setCanUndo(payload);
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
        editor.registerCommand(
          CAN_REDO_COMMAND,
          (payload) => {
            setCanRedo(payload);
            return false;
          },
          COMMAND_PRIORITY_LOW,
        ),
      ),
    [editor, $updateToolbar],
  );

  return (
    <div className="mb-px flex rounded-t-lg bg-primary p-1 align-middle" ref={toolbarRef}>
      <button
        type="button"
        disabled={!canUndo}
        onClick={() => {
          // @ts-expect-error -- second argument is optional
          editor.dispatchCommand(UNDO_COMMAND);
        }}
        className="me-0.5 flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Undo"
      >
        <UndoIcon size={20} />
      </button>
      <button
        type="button"
        disabled={!canRedo}
        onClick={() => {
          // @ts-expect-error -- second argument is optional
          editor.dispatchCommand(REDO_COMMAND);
        }}
        className="flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Redo"
      >
        <RedoIcon size={20} />
      </button>
      <Divider />
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        className={
          'me-0.5 flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20 ' +
          (isBold ? 'text-neutral-950' : 'text-neutral-400')
        }
        aria-label="Format Bold"
      >
        <BoldIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        className={
          'me-0.5 flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20 ' +
          (isItalic ? 'text-neutral-950' : 'text-neutral-400')
        }
        aria-label="Format Italics"
      >
        <ItalicIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        className={
          'me-0.5 flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20 ' +
          (isUnderline ? 'text-neutral-950' : 'text-neutral-400')
        }
        aria-label="Format Underline"
      >
        <UnderlineIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
        className={
          'me-0.5 flex rounded-lg bg-none p-2 align-middle hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20 ' +
          (isStrikethrough ? 'text-neutral-950' : 'text-neutral-400')
        }
        aria-label="Format Strikethrough"
      >
        <StrikethroughIcon size={20} />
      </button>
      <Divider />
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className="me-0.5 flex rounded-lg bg-none p-2 align-middle text-neutral-400 hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Left Align"
      >
        <AlignLeftIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className="me-0.5 flex rounded-lg bg-none p-2 align-middle text-neutral-400 hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Center Align"
      >
        <AlignCenterIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className="me-0.5 flex rounded-lg bg-none p-2 align-middle text-neutral-400 hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Right Align"
      >
        <AlignRightIcon size={20} />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
        className="flex rounded-lg bg-none p-2 align-middle text-neutral-400 hover:enabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-20"
        aria-label="Justify Align"
      >
        <AlignJustifyIcon size={20} />
      </button>
    </div>
  );
}
