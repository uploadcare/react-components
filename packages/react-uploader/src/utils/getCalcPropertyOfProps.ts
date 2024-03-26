// @ts-nocheck
// @TODO add types
export const getCalcPropertyOfProps = (props) => {
  const eventHandlers = {};
  const config = {};

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
