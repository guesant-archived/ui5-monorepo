import * as React from "react";
import styled from "styled-components";

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

class Editor extends React.Component {
  render() {
    return (
      <div>
        <EditorGrid>
          <GridHeader />
        </EditorGrid>
      </div>
    );
  }
}

export default Editor;