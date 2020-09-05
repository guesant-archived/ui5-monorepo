//region Preamble
/**
 * https://github.com/guesant/ui5-monorepo
 * Copyright (C) 2020 Gabriel Rodrigues
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
//endregion

export type Event = string;
export type Listener = (...args: any[]) => void;

export class EventEmitter {
  events = new Map<Event, Set<Listener>>();

  getListeners(event: Event): Set<Listener> {
    if (this.events.has(event)) {
      return this.events.get(event) as Set<Listener>;
    } else {
      const listeners = new Set() as Set<Listener>;
      this.events.set(event, listeners);
      return listeners;
    }
  }

  on(event: Event, listener: Listener) {
    if (typeof listener !== "function") {
      throw new Error("The listener must be a function");
    }
    const listeners = this.getListeners(event);
    listeners.add(listener);
    return this;
  }

  off(event?: Event, listener?: Listener) {
    if (!listener && !event) {
      this.events.clear();
    } else if (!listener && event) {
      this.events.delete(event);
    } else if (listener && event) {
      const listeners = this.events.get(event);
      if (listeners) {
        listeners.delete(listener);
      }
    }
    return this;
  }

  async emit(event: Event, ...args: any[]) {
    const listeners = this.events.get(event);
    if (listeners) {
      for (let listener of listeners) {
        await new Promise((resolve) => resolve(listener.apply(this, args)));
      }
    }
    return this;
  }
  async parallelEmit(event: Event, ...args: any[]) {
    const listeners = this.events.get(event);
    if (listeners) {
      await Promise.all(
        Array.from(listeners).map(async (listener) =>
          listener.apply(this, args),
        ),
      );
    }
    return this;
  }
  syncEmit(event: Event, ...args: any[]) {
    const listeners = this.events.get(event);
    if (listeners) {
      for (let listener of listeners) {
        listener.apply(this, args);
      }
    }
    return this;
  }
}
