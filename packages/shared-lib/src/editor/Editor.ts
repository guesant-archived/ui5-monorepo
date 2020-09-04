import { Component, FunctionComponent } from "react";
import { Template } from "@fantastic-images/types";
import { EventEmitter } from "../EventEmitter";

type EditorBlockKey = string;
type EditorBlockValue = FunctionComponent | Component | "string";

export interface Editor extends Component {
  events: EventEmitter;
  editorBlocks: Map<EditorBlockKey, EditorBlockValue>;
  state: {
    editor: {};
    template: Template;
  };
  setEditorBlock(
    location: EditorBlockKey,
    component: EditorBlockValue,
    { forceUpdate }: { forceUpdate: boolean },
  ): void;
  getEditorBlock(location: EditorBlockKey): EditorBlockValue;
  onSetTemplate(template: this["state"]["template"]): Promise<void>;
  onSetEditor(editor: this["state"]["editor"]): Promise<void>;
}
