import { Component } from "react";
import { EventEmitter } from "../EventEmitter";

export interface Editor extends Component {
  events: EventEmitter;
  state: {
    editor: {};
  };
  onSetEditor(editor: this["state"]["editor"]): Promise<void>;
}
