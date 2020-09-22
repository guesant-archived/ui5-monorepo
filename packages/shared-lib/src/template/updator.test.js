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

import { EditorPlugin } from "../../lib/editor/EditorPlugin";
import { updator } from "./updator";

class GenericPlugin extends EditorPlugin {}

const makeObject = (extend = {}) => ({ ...extend });

const getGenericEditor = () =>
  makeObject({
    state: { template: {}, editor: {} },
    onSetTemplate(template) {
      this.state.template = template;
    },
    onSetEditor(editor) {
      this.state.editor = editor;
    },
  });

test("updator: should update selected items", async () => {
  const plugin = new GenericPlugin();
  const editor = getGenericEditor();
  editor.onSetTemplate({
    model: {
      fabricExported: {
        objects: [
          { key: "obj1", width: 10 },
          { key: "obj2", width: 10 },
          { key: "obj3", width: 10 },
        ],
      },
    },
  });
  editor.onSetEditor({
    selectedObjects: [1],
  });
  plugin.setEditor(editor);
  const update = updator(plugin);
  await update(({ object }) => ({ height: object.width * 2 }));

  expect(
    plugin.editor.state.template.model.fabricExported.objects,
  ).toStrictEqual([
    { key: "obj1", width: 10 },
    { key: "obj2", width: 10, height: 20 },
    { key: "obj3", width: 10 },
  ]);
});
