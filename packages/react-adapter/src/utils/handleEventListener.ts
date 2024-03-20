const listenedEvents = new WeakMap<Element, Map<string, EventListenerObject>>();

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

const updateOrRemoveEventListener = (
  node: Element,
  event: string,
  listener?: (event?: Event) => void,
): void => {
  const events = ensureEventMapForNode(node);
  const handlerExists = events.has(event);

  if (listener) {
    const handler: EventListenerObject = { handleEvent: listener };
    if (!handlerExists) {
      node.addEventListener(event, handler);
    }
    events.set(event, handler);
  } else if (handlerExists) {
    const handler = events.get(event);
    node.removeEventListener(event, handler!);
    events.delete(event);
  }
};

export const handleEventListener = updateOrRemoveEventListener;
