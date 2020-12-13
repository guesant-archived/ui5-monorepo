import React from "react";
import { useSelector, useStore } from "react-redux";
import { mountPlugins } from "../helpers/mountPlugins";
import { setPluginsStore } from "../helpers/setPluginsStore";
import { getEditorPlugins } from "../plugins/getEditorPlugins";
import store from "../store/configureStore";
import { listComponents } from "../store/editor/components/selectors";
import { registerPlugin } from "../store/editor/plugins/methods";
import { getPlugins } from "../store/editor/plugins/selectors";
import EditorGrid from "./EditorGrid";
import EditorGridArea from "./EditorGridArea";

const registerPlugins = async () => {
  const defaultPlugins = getEditorPlugins();
  setPluginsStore(store)(defaultPlugins);
  for (const plugin of defaultPlugins) {
    await store.dispatch(registerPlugin(plugin));
  }
};

registerPlugins();

const Editor = () => {
  const components: [string, any][] = useSelector(listComponents);
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
