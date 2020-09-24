//region Preamble
/**
 * https://github.com/guesant/ui5-monorepo
 * Copyright (C) 2020 Gabriel Rodrigues
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
//endregion

import { Component, FunctionComponent } from "react";
import { Template } from "@fantastic-images/types";
import { Canvas } from "fabric/fabric-impl";
import { EventEmitter } from "../EventEmitter";

type EditorBlockKey = string;
type EditorBlockValue = FunctionComponent | Component | "string";

export interface Editor extends Component {
  events: EventEmitter;
  editorBlocks: Map<EditorBlockKey, EditorBlockValue>;
  state: {
    canvas?: Canvas;
    editor: {
      selectedObjects: number[];
      selectedStaticImages: number[];
    };
    template: Template;
  };
  setEditorBlock(
    location: EditorBlockKey,
    component: EditorBlockValue,
    { forceUpdate }: { forceUpdate: boolean },
  ): void;
  getEditorBlock(location: EditorBlockKey): EditorBlockValue;
  onSetTemplate(
    template: this["state"]["template"],
    { emitEvent }?: { emitEvent?: boolean },
    ...args: any[]
  ): Promise<void>;
  onSetEditor(
    editor: this["state"]["editor"],
    { emitEvent }?: { emitEvent?: boolean },
    ...args: any[]
  ): Promise<void>;
}
