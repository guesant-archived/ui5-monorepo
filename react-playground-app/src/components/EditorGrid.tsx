import React from "react";
import styles from "./EditorGrid.module.css";

export type EditorGridProps = React.HTMLAttributes<HTMLDivElement>;

const EditorGrid = (props: EditorGridProps) => {
  return <div className={styles.editorGrid} {...props} />;
};

export default EditorGrid;
