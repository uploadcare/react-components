import React from "react";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import * as LR from "@uploadcare/blocks";

export const AdapterConfig = customElementToReactComponent({
  react: React,
  tag: "lr-config",
  elClass: LR.Config,
});
