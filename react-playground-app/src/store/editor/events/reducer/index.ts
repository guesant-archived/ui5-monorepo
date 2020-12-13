import EventEmitter from "eventemitter3";

const emitterInstance = new EventEmitter();

const eventsReducer = (state = emitterInstance) => state;

export { eventsReducer as reducer };

export default eventsReducer;
