import { Component } from "react";
import { EventEmitter } from "../EventEmitter";

export interface Editor extends Component {
  events: EventEmitter;
}
