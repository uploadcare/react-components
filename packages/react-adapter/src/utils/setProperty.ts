import { EventsSchema } from "../createComponentFactory.ts";
import { handleEventListener } from "./handleEventListener.ts";

export const setProperty = <E extends Element>(
  node: E,
  name: string,
  value: unknown,
  previousValue: unknown,
  events?: EventsSchema,
) => {
  const event = events?.[name];

  if (event !== undefined && value !== previousValue) {
    handleEventListener(node, event, value as (e?: Event) => void);
    return;
  }

  node[name as keyof E] = value as E[keyof E];

  if (
    (value === undefined || value === null) &&
    name in HTMLElement.prototype
  ) {
    node.removeAttribute(name);
  }
};
