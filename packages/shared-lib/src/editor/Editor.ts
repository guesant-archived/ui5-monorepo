import { Component } from "react";
import { Template } from "@fantastic-images/types";
import { EventEmitter } from "../EventEmitter";

export interface Editor extends Component {
  events: EventEmitter;
  state: {
    editor: {};
    template: Template;
  };
  onSetTemplate(template: this["state"]["template"]): Promise<void>;
  onSetEditor(editor: this["state"]["editor"]): Promise<void>;
}
