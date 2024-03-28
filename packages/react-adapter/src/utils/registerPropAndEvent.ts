const listenedEvents = new WeakMap<Element, Map<string, EventListenerObject>>();

type TRegisterEvent<E> = {
  node: E;
  nameProp: string;
  valueProp: unknown;
  prevValueProp: unknown;
  event: string;
};

const ensureEventMapForNode = (
  node: Element,
): Map<string, EventListenerObject> => {
  let events = listenedEvents.get(node);
  if (!events) {
    events = new Map();
    listenedEvents.set(node, events);
  }
  return events;
};

export const registerPropAndEvent = <E extends Element>({
  node,
  nameProp,
  valueProp,
  prevValueProp,
  event,
}: TRegisterEvent<E>) => {
  // Subscribe to the event if it is defined
  if (event !== undefined && valueProp !== prevValueProp) {
    const events = ensureEventMapForNode(node);
    const handlerExists = events.has(event);

    if (valueProp) {
      const handler: EventListenerObject = {
        handleEvent: valueProp as (e?: Event) => void,
      };
      if (!handlerExists) {
        node.addEventListener(event, handler);
      }
      events.set(event, handler);
    } else if (handlerExists) {
      const handler = events.get(event);
      node.removeEventListener(event, handler!);
      events.delete(event);
    }

    return;
  }

  node[nameProp as keyof E] = valueProp as E[keyof E];

  if (
    (valueProp === undefined || valueProp === null) &&
    nameProp in HTMLElement.prototype
  ) {
    node.removeAttribute(nameProp);
  }
};
