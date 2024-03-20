import { reservedReactProperties } from "../constants/reservedReactProperties.ts";

export const logReservedPropertyWarnings = (
  tagName: string,
  elementClass: any,
) => {
  reservedReactProperties.forEach((property) => {
    if (
      property in elementClass.prototype &&
      !(property in HTMLElement.prototype)
    ) {
      console.warn(
        `${tagName} contains property ${property} which is a React reserved property.`,
      );
    }
  });
};
