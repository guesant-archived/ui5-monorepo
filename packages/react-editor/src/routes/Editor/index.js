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
      editor: {},
      template: {},
    };
    this.subscribePlugin = this.subscribePlugin.bind(this);
    this.setEditorBlock = this.setEditorBlock.bind(this);
    ["header", "left", "right"].forEach((location) => {
      this.setEditorBlock(location, fragment);
    });
  }
  async onSetTemplate(template) {
    await new Promise((resolve) => this.setState({ template }, resolve));
  }
  async onSetEditor(editor) {
    await new Promise((resolve) => this.setState({ editor }, resolve));
  }
  setEditorBlock(location, component) {
    this.editorBlocks.set(location, component);
  }
  getEditorBlock(location) {
    this.editorBlocks.has(location)
      ? this.editorBlocks.get(location)
      : fragment;
  }
  subscribePlugin(plugin) {
    this.plugins.add(plugin);
    plugin.setEditor(this);
    plugin.onSetup();
  }
  componentDidMount() {
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
          <GridCanvas />
          <GridRight>
            {React.createElement(this.getEditorBlock("right"))}
          </GridRight>
          <GridFooter />
        </EditorGrid>
      </div>
    );
  }
}

export default Editor;
