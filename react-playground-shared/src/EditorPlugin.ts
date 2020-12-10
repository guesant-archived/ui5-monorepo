export type EditorPluginInfo = {
  slug?: string;
  meta: {
    name: string;
  };
};

export abstract class EditorPlugin {
  store: any;
  constructor(store?: any) {
    this.bindThis = this.bindThis.bind(this);
    this.setStore(store);
    this.bindThis();
  }
  bindThis() {
    this.onSetup = this.onSetup.bind(this);
    this.onMount = this.onMount.bind(this);
    this.setStore = this.setStore.bind(this);
  }
  static registerPlugin(): EditorPluginInfo {
    return {
      slug: "editor-plugin-generic",
      meta: {
        name: "Generic Editor Plugin",
      },
    };
  }
  setStore(store: any) {
    this.store = store;
  }
  async onSetup() {}
  async onMount(): Promise<void | (() => Promise<any>)> {}
}
