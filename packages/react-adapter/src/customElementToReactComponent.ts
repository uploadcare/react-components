import React from "react";

import { reservedReactProperties } from "./constants/reservedReactProperties";
import { mapEvents } from "./utils/mapperEvents";
import { registerPropAndEvent } from "./utils/registerPropAndEvent";

export type Options<
  I extends HTMLElement,
  E extends Record<string, string> = {},
> = {
  react: typeof React;
  tag: string;
  elClass: { new(): I };
  schemaEvents?: E;
};

const segregateProps = <T, E, I>(props: T, eventProps: E, elClass: I) => {
  const reactProps: Record<string, unknown> = {};
  const customElProps: Record<string, unknown> = {};

  // @ts-ignore
  Object.entries(props).forEach(([key, value]) => {
    if (reservedReactProperties.has(key)) {
      reactProps[key === "className" ? "class" : key] = value;
      // @ts-ignore
    } else if (eventProps.has(key) || key in elClass.prototype) {
      customElProps[key] = value;
    } else {
      reactProps[key] = value;
    }
  });

  return { reactProps, customElProps };
};

export const customElementToReactComponent = <
  I extends HTMLElement,
  E extends Record<string, string> = {},
>({
  react: React, // https://react.dev/warnings/invalid-hook-call-warning
  tag,
  elClass,
  schemaEvents,
}: Options<I, E>) => {
  const events = mapEvents(schemaEvents);
  const eventKeyOfProps = new Set(Object.keys(events ?? {}));

  const ReactComponent = React.forwardRef<I, E>(
    (props: Record<string, unknown>, ref) => {
      const prevElemPropsRef = React.useRef(new Map());
      const nodeRef = React.useRef<I | null>(null);

      const { reactProps, customElProps } = segregateProps<
        Record<string, unknown>,
        Set<string>,
        I
      // @ts-ignore
      >(props, eventKeyOfProps, elClass);

      React.useLayoutEffect(() => {
        if (nodeRef.current === null) {
          return;
        }

        const newElemProps = new Map();

        for (const key in customElProps) {
          registerPropAndEvent({
            node: nodeRef.current,
            nameProp: key,
            valueProp: customElProps[key],
            prevValueProp: prevElemPropsRef.current.get(key),
            event: events[key],
          });
          prevElemPropsRef.current.delete(key);
          newElemProps.set(key, props[key]);
        }

        for (const [key, value] of prevElemPropsRef.current) {
          registerPropAndEvent({
            node: nodeRef.current,
            nameProp: key,
            valueProp: undefined,
            prevValueProp: value,
            event: events[key],
          });
        }
        prevElemPropsRef.current = newElemProps;
      });

      // __tag is a private property from symbiotejs
      // @ts-ignore
      return React.createElement(tag ?? elClass.__tag, {
        ...reactProps,
        ref: React.useCallback(
          (node: I) => {
            nodeRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref !== null) {
              ref.current = node;
            }
          },
          [ref],
        ),
      });
    },
  );

  ReactComponent.displayName = elClass.name;

  return ReactComponent;
};
