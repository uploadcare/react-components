import React from "react";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import * as UC from "@uploadcare/file-uploader";

export const AdapterUploadCtxProvider = customElementToReactComponent({
  react: React,
  tag: "uc-upload-ctx-provider",
  elClass: UC.UploadCtxProvider,
  schemaEvents: UC.UploadCtxProvider.EventType,
});
