type EventTypeMap = Record<string, string>;

export const mapEvents = (eventType: EventTypeMap = {}): EventTypeMap => {
  return Object?.keys(eventType).reduce<EventTypeMap>((events, key) => {
    const originalValue = eventType?.[key];
    const formattedKey = `on${originalValue
      ?.split("-")
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      ?.join("")}`;
    events[formattedKey] = originalValue;
    return events;
  }, {});
};
