export const getCalcPropertyOfProps = <T extends Object>(props: T) => {
  const eventHandlers: Record<string, unknown> = {};
  const config: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith("on")) {
      eventHandlers[key] = value;
    } else {
      config[key] = value;
    }
  });

  return {
    eventHandlers,
    config,
  };
};
