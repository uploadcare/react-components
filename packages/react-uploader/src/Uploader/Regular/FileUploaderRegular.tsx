import React, { type FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";
import { getStyleSource } from "../default";
import type { TProps } from "../types";

import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps";
import { getUserAgentIntegration } from "../../utils/getUserAgentIntegration.ts";

LR.registerBlocks(LR);

const AdapterFileUploaderRegular = customElementToReactComponent({
  react: React,
  tag: "lr-file-uploader-regular",
  elClass: LR.FileUploaderRegular,
});

const CSS_SRC_REGULAR = getStyleSource("regular");

export const FileUploaderRegular: FC<TProps> = ({
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
      <AdapterConfig userAgentIntegration={getUserAgentIntegration()} ctx-name={CTX_NAME} {...config} />
      {/* @ts-ignore */}
      <AdapterUploadCtxProvider
        ref={refUploadCtxProvider}
        ctx-name={CTX_NAME}
        {...eventHandlers}
      />
      <AdapterFileUploaderRegular
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_REGULAR}
      />
    </div>
  );
};
