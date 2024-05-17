const listenedEvents = new WeakMap<Element, Map<string, EventListenerObject>>();
type THandleEvent = (e?: Event) => void

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
  if (events === undefined) {
    listenedEvents.set(node, (events = new Map()));
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
  if (event !== undefined) {
    if (valueProp !== prevValueProp) {
      const events = ensureEventMapForNode(node);
      const handlerExists = events.has(event);
      let handler = events.get(event);

      if (valueProp !== undefined) {
        if (!handlerExists) {
          events.set(event, (handler = { handleEvent: valueProp as THandleEvent }))
          node.addEventListener(event, handler);
        } else {
          handler.handleEvent = valueProp as THandleEvent
        }
      } else if (handlerExists) {
        events.delete(event);
        node.removeEventListener(event, handler)
      }
    }
    return
  }

  node[nameProp as keyof E] = valueProp as E[keyof E];

  if (
    (valueProp === undefined || valueProp === null) &&
    nameProp in HTMLElement.prototype
  ) {
    node.removeAttribute(nameProp);
  }
};
