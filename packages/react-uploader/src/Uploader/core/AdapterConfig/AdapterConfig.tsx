import React from "react";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import * as UC from "@uploadcare/file-uploader";

export const AdapterConfig = customElementToReactComponent({
  react: React,
  tag: "uc-config",
  elClass: UC.Config,
});
