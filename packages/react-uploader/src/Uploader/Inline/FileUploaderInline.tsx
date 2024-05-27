import React, { type FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import "@uploadcare/blocks/web/lr-file-uploader-inline.min.css";
import { customElementToReactComponent } from "@uploadcare/react-adapter";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";
import type { TProps } from "../types";
import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps";
import { getUserAgentIntegration } from "../../utils/getUserAgentIntegration";
import { ConditionalSuspense, useIsBrowser } from "../../SSR/ConditionalSuspense";

LR.registerBlocks(LR);

const AdapterFileUploaderInline = customElementToReactComponent({
  react: React,
  tag: "lr-file-uploader-inline",
  elClass: LR.FileUploaderMinimal,
});

export const FileUploaderInline: FC<TProps> = ({
  ctxName,
  className,
  classNameUploader,
  apiRef,
  fallback,
  ...props
}) => {
  const CTX_NAME = useMemo(() => ctxName ?? LR.UID.generate(), [ctxName]);

  const { eventHandlers, config } = useMemo(
    () => getCalcPropertyOfProps<TProps>(props),
    [props],
  );

  const isBrowser = useIsBrowser();

  return (
    <ConditionalSuspense condition={isBrowser} fallback={fallback} >
      <div className={className}>
        {/* @ts-ignore */}
        <AdapterConfig userAgentIntegration={getUserAgentIntegration()} ctx-name={CTX_NAME} {...config} />
        {/* @ts-ignore */}
        <AdapterUploadCtxProvider
          ref={apiRef}
          ctx-name={CTX_NAME}
          {...eventHandlers}
        />

        {/* @ts-ignore */}
        <AdapterFileUploaderInline class={classNameUploader} ctx-name={CTX_NAME} />
      </div>
    </ConditionalSuspense>
  );
};
