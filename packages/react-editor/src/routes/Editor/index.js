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

import * as React from "react";
import styled from "styled-components";
import { EventEmitter } from "@ui5/shared-lib/lib/EventEmitter";

const EditorGrid = styled.div`
  display: grid;
  min-height: 100vh;
  height: 100%;
  grid-template-columns: minmax(250px, auto) 1fr minmax(250px, auto);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "left canvas right"
    "footer footer footer";
  > * > * {
    height: 100%;
  }
`;

const GridHeader = styled.div`
  grid-area: header;
`;

const GridLeft = styled.div`
  grid-area: left;
`;

const GridRight = styled.div`
  grid-area: right;
`;

const GridCanvas = styled.div`
  grid-area: canvas;
`;

const GridFooter = styled.div`
  grid-area: footer;
`;

const fragment = () => <React.Fragment />;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.events = new EventEmitter();
    this.plugins = new Set();
    this.editorBlocks = new Map();
    this.state = {
      editor: {
        selectedObjects: [],
      },
      template: {},
    };
    this.subscribePlugin = this.subscribePlugin.bind(this);
    this.setEditorBlock = this.setEditorBlock.bind(this);
    ["header", "left", "right", "canvas", "footer"].forEach((location) => {
      this.setEditorBlock(location, fragment, { forceUpdate: false });
    });
  }
  async onSetTemplate(template) {
    await new Promise((resolve) => this.setState({ template }, resolve));
  }
  async onSetEditor(editor) {
    await new Promise((resolve) => this.setState({ editor }, resolve));
  }
  setEditorBlock(location, component, { forceUpdate = true } = {}) {
    this.editorBlocks.set(location, component);
    forceUpdate && this.forceUpdate();
  }
  getEditorBlock(location) {
    return this.editorBlocks.has(location)
      ? this.editorBlocks.get(location)
      : fragment;
  }
  subscribePlugin(plugin) {
    this.plugins.add(plugin);
    plugin.setEditor(this);
    plugin.onSetup();
  }
  componentDidMount() {
    this.events.on("SetEditorComponent", ([location, component]) => {
      this.setEditorBlock(location, component);
    });
    this.plugins.forEach((plugin) => {
      plugin.setEditor(this);
      plugin.onMount();
    });
  }
  render() {
    return (
      <div>
        <EditorGrid>
          <GridHeader>
            {React.createElement(this.getEditorBlock("header"))}
          </GridHeader>
          <GridLeft>
            {React.createElement(this.getEditorBlock("left"))}
          </GridLeft>
          <GridCanvas>
            {React.createElement(this.getEditorBlock("canvas"))}
          </GridCanvas>
          <GridRight>
            {React.createElement(this.getEditorBlock("right"))}
          </GridRight>
          <GridFooter>
            {React.createElement(this.getEditorBlock("footer"))}
          </GridFooter>
        </EditorGrid>
      </div>
    );
  }
}

export default Editor;
