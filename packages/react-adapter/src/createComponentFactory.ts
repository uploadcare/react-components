// @ts-nocheck
import type React from "react";

import { reservedReactProperties } from "./constants/reservedReactProperties";
import { setProperty } from "./utils/setProperty";
import { mapEvents } from "./utils/mapperEvents";
import { logReservedPropertyWarnings } from "./utils/logReservedPropertyWarnings.ts";

export type EventsSchema = Record<string, string>;

export type Options<I extends HTMLElement, E extends EventsSchema = {}> = {
  react: typeof React;
  tagName: string;
  elementClass: { new (): I };
  displayName?: string; // The displayName string is used in debugging messages
  schema?: E;
};

type TPropsOfElement = Record<string, unknown>;
const segregateProps = (props, eventProps, elementClass) => {
  const reactProps: TPropsOfElement = {};
  const elementProps: TPropsOfElement = {};

  Object.entries(props).forEach(([key, value]) => {
    if (reservedReactProperties.has(key)) {
      reactProps[key === "className" ? "class" : key] = value;
    } else if (eventProps.has(key) || key in elementClass.prototype) {
      elementProps[key] = value;
    } else {
      reactProps[key] = value;
    }
  });

  return { reactProps, elementProps };
};

export const createComponentFactory = <
  I extends HTMLElement,
  E extends EventsSchema = {},
>({
  react: React, // https://react.dev/warnings/invalid-hook-call-warning
  tagName,
  elementClass,
  displayName,
  schema,
}: Options<I, E>) => {
  const events = mapEvents(schema);
  const eventProps = new Set(Object.keys(events ?? {}));

  logReservedPropertyWarnings(tagName, elementClass);

  const ReactComponent = React.forwardRef((props, ref) => {
    const prevElemPropsRef = React.useRef(new Map());

    const elementRef = React.useRef<I | null>(null);

    const { reactProps, elementProps } = segregateProps(
      props,
      eventProps,
      elementClass,
    );

    React.useLayoutEffect(() => {
      if (elementRef.current === null) {
        return;
      }
      const newElemProps = new Map();
      for (const key in elementProps) {
        setProperty(
          elementRef.current,
          key,
          props[key],
          prevElemPropsRef.current.get(key),
          events,
        );
        prevElemPropsRef.current.delete(key);
        newElemProps.set(key, props[key]);
      }

      for (const [key, value] of prevElemPropsRef.current) {
        setProperty(elementRef.current, key, undefined, value, events);
      }
      prevElemPropsRef.current = newElemProps;
    }, []);

    reactProps["suppressHydrationWarning"] = true;

    // https://react.dev/reference/react/createElement#returns
    return React.createElement(tagName, {
      ...reactProps,
      ref: React.useCallback(
        (node: I) => {
          elementRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref !== null) {
            ref.current = node;
          }
        },
        [ref],
      ),
    });
  });

  ReactComponent.displayName = displayName ?? elementClass.name;

  return ReactComponent;
};
