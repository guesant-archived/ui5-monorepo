import React from "react";

export type EditorAreaProps = React.HTMLAttributes<HTMLDivElement> & {
  area: string;
};

const EditorGridArea = ({ area, ...props }: EditorAreaProps) => {
  return <div style={{ gridArea: area }} {...props} />;
};

export default EditorGridArea;
