import React from "react";
// @ts-ignore
import { createComponentFactory } from "@uploadcare/react-adapter";
import * as LR from "@uploadcare/blocks";

export const AdapterUploadCtxProvider = createComponentFactory({
  react: React,
  tagName: "lr-upload-ctx-provider",
  elementClass: LR.UploadCtxProvider,
  schema: LR.UploadCtxProvider.EventType,
});
