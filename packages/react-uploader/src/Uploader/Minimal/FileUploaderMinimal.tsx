import React, { type FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";
import type { TProps } from "../types";
import { getStyleSource } from "../default";
import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps";
import { getUserAgentIntegration } from "../../utils/getUserAgentIntegration";

LR.registerBlocks(LR);

const AdapterFileUploaderMinimal = customElementToReactComponent({
  react: React,
  tag: "lr-file-uploader-minimal",
  elClass: LR.FileUploaderMinimal,
});

const CSS_SRC_MINIMAL = getStyleSource("minimal");

export const FileUploaderMinimal: FC<TProps> = ({
  ctxName,
  className,
  refUploadCtxProvider,
  ...props
}) => {
  const CTX_NAME = useMemo(() => ctxName ?? LR.UID.generate(), [ctxName]);

  const { eventHandlers, config } = useMemo(
    () => getCalcPropertyOfProps<TProps>(props),
    [props],
  );

  return (
    <div className={className}>
      {/* @ts-ignore */}
      <AdapterConfig userAgentIntegration={getUserAgentIntegration(config.pubkey)} ctx-name={CTX_NAME} {...config} />
      {/* @ts-ignore */}
      <AdapterUploadCtxProvider
        ref={refUploadCtxProvider}
        ctx-name={CTX_NAME}
        {...eventHandlers}
      />
      <AdapterFileUploaderMinimal
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_MINIMAL}
      />
    </div>
  );
};
