import { TEventsSchema, TProps } from "../Uploader/types.ts";

export const getEventHandlersOfProps = (
  config: TProps,
  props: TProps,
): Record<keyof TEventsSchema, unknown> =>
  Object.keys(config).reduce(
    (acc, key) => {
      if (key.startsWith("on")) {
        acc[key] = props[key as keyof typeof props];
      }
      return acc;
    },
    // TODO eadidenko add to the key, value types
    {} as Record<string, unknown>,
  );
