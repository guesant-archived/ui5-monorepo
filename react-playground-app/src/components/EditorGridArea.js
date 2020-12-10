import React from "react";

const EditorGridArea = ({ area, ...props }) => {
  return <div style={{ gridArea: area }} {...props} />;
};

export default EditorGridArea;
