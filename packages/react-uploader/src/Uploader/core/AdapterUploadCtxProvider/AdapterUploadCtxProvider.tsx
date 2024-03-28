import React from "react";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import * as LR from "@uploadcare/blocks";

export const AdapterUploadCtxProvider = customElementToReactComponent({
  react: React,
  tag: "lr-upload-ctx-provider",
  elClass: LR.UploadCtxProvider,
  schemaEvents: LR.UploadCtxProvider.EventType,
});
