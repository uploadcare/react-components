import React, { FC } from "react";

export type TProps = {
  fallback?: React.ReactChild | React.ReactFragment | React.ReactPortal | null;
  condition?: boolean;
  children: React.ReactNode;
};

export const ConditionalSuspense: FC<TProps> = ({ children }) => {
  return children;
};
