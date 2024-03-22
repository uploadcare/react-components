import React, { FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

// @ts-ignore
import { createComponentFactory } from "@uploadcare/react-adapter";
import type { TProps } from "../types";
import { getStyleSource } from "../default";
import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps.ts";

LR.registerBlocks(LR);

const AdapterFileUploaderInline = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-inline",
  elementClass: LR.FileUploaderMinimal,
});

const CSS_SRC_INLINE = getStyleSource("inline");
export const FileUploaderInline: FC<TProps> = ({
  refUploadCtxProvider,
  ...props
}) => {
  const CTX_NAME = useMemo(() => LR.UID.generate(), [LR.UID.generate]);

  const { eventHandlers, config } = useMemo(
    () => getCalcPropertyOfProps(props),
    [props],
  );

  return (
    <React.Fragment>
      <AdapterConfig ctx-name={CTX_NAME} {...config} />

      <AdapterUploadCtxProvider
        ref={refUploadCtxProvider}
        ctx-name={CTX_NAME}
        {...eventHandlers}
      />

      <AdapterFileUploaderInline ctx-name={CTX_NAME} css-src={CSS_SRC_INLINE} />
    </React.Fragment>
  );
};
