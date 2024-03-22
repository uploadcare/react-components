//@ts-nocheck
import React, { FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { createComponentFactory } from "@uploadcare/react-adapter";

import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

import type { TProps } from "../types";
import { getStyleSource } from "../default";
import { getEventHandlersOfProps } from "../../utils/getEventHandlersOfProps.ts";

LR.registerBlocks(LR);

const AdapterFileUploaderMinimal = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-minimal",
  elementClass: LR.FileUploaderMinimal,
});

const CSS_SRC_MINIMAL = getStyleSource("minimal");

export const FileUploaderMinimal: FC<TProps> = ({
  refUploadCtxProvider,

  ...props
}) => {
  const { ...config } = props;
  const CTX_NAME = LR.UID.generate();

  const eventHandlers = useMemo(
    () => getEventHandlersOfProps(config, props),
    [],
  );

  return (
    <React.Fragment>
      <AdapterConfig ctx-name={CTX_NAME} {...config} />
      <AdapterUploadCtxProvider
        ref={refUploadCtxProvider}
        ctx-name={CTX_NAME}
        {...eventHandlers}
      />
      <AdapterFileUploaderMinimal
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_MINIMAL}
      />
    </React.Fragment>
  );
};
