import React from "react";

import { createComponentFactory } from "@uploadcare/react-adapter";
import * as LR from "@uploadcare/blocks";

export const AdapterConfig = createComponentFactory({
  react: React,
  tagName: "lr-config",
  elementClass: LR.Config,
});
