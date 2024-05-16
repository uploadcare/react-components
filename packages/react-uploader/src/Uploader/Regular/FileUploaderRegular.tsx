import React, { type FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";
import type { TProps } from "../types";

import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps";
import { getUserAgentIntegration } from "../../utils/getUserAgentIntegration";

LR.registerBlocks(LR);

const AdapterFileUploaderRegular = customElementToReactComponent({
  react: React,
  tag: "lr-file-uploader-regular",
  elClass: LR.FileUploaderRegular,
});

export const FileUploaderRegular: FC<TProps> = ({
  ctxName,
  className,
  apiRef,
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
        ref={apiRef}
        ctx-name={CTX_NAME}
        {...eventHandlers}
      />
      <AdapterFileUploaderRegular ctx-name={CTX_NAME} />
    </div>
  );
};
