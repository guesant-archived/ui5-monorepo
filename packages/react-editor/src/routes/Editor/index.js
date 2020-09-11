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
import * as fantasticImages from "@fantastic-images/core";
import { fabric } from "fabric";

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
      canvas: null,
      editor: {
        selectedObjects: [],
        selectedStaticImages: [],
      },
      template: {},
    };
    this.divcanvas = React.createRef();
    this.subscribePlugin = this.subscribePlugin.bind(this);
    this.setEditorBlock = this.setEditorBlock.bind(this);
    this.setupCanvas = this.setupCanvas.bind(this);
    this.events.on("SetEditorComponent", ([location, component]) => {
      this.setEditorBlock(location, component);
    });
    ["header", "left", "right", "canvas", "footer"].forEach((location) => {
      this.setEditorBlock(location, fragment, { forceUpdate: false });
    });
  }
  async setupCanvas() {
    const { template } = this.state;
    const canvas = fantasticImages.fabric.getCanvas.canvasByDOM({ fabric })({
      document: window.document,
    })({ wrapper: this.divcanvas.current, id: "editor-canvas" })(template);
    await new Promise((resolve) => this.setState({ canvas }, resolve));
    for (const plugin of this.plugins) {
      plugin.setCanvas(canvas);
      await plugin.onSetupCanvas();
    }
    await this.events.emit("EditorOnSetupCanvas", canvas);
  }
  async onSetTemplate(template, ...args) {
    await new Promise((resolve) => this.setState({ template }, resolve));
    await this.events.emit("EditorOnSetTemplate", ...args);
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
  async componentDidMount() {
    await new Promise(async () => {
      for (const plugin of this.plugins) {
        await plugin.onMount();
      }
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
            <div>
              <div ref={this.divcanvas}></div>
            </div>
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
