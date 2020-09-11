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

import { Canvas } from "fabric/fabric-impl";
import { Editor } from "./Editor";

export interface EditorPluginInfo {
}

export abstract class EditorPlugin {
  editor?: Editor = undefined;
  canvas?: Canvas = undefined;
  abstract onRegisterPlugin(): EditorPluginInfo;
  onSetup() {}
  async onMount() {}
  async onSetupCanvas() {}
  async onRenderCanvas() {}
  setEditor(editor: this["editor"]) {
    this.editor = editor;
  }
  setCanvas(canvas: this["canvas"]) {
    this.canvas = canvas;
  }
}
