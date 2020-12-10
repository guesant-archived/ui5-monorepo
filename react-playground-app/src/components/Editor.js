import { listComponents } from "@ui5/react-playground-shared/lib/store/editor/components/selectors";
import { getPlugins } from "@ui5/react-playground-shared/lib/store/editor/plugins/selectors";
import React from "react";
import { useSelector, useStore } from "react-redux";
import { mountPlugins } from "../helpers/mountPlugins";
import { setPluginsStore } from "../helpers/setPluginsStore";
import EditorGrid from "./EditorGrid";
import EditorGridArea from "./EditorGridArea";

const Editor = () => {
  const components = useSelector(listComponents);
  const plugins = useSelector(getPlugins);
  const store = useStore();

  React.useEffect(() => {
    setPluginsStore(store)(plugins);
  }, [store, plugins]);

  React.useEffect(() => {
    const unmountPromise = mountPlugins(plugins);
    return () => {
      unmountPromise.then((unmountPlugins) => unmountPlugins());
    };
  }, [plugins]);

  return (
    <EditorGrid>
      {components.map(([area, component], idx) => (
        <React.Fragment key={[area, idx].join("-")}>
          <EditorGridArea area={area}>
            {React.createElement(component)}
          </EditorGridArea>
        </React.Fragment>
      ))}
    </EditorGrid>
  );
};

export default Editor;
