import React, { FC, useMemo } from "react";
import * as LR from "@uploadcare/blocks";
import { createComponentFactory } from "@uploadcare/react-adapter";
import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";
import { getStyleSource } from "../default";
import type { TProps } from "../types";

import { getCalcPropertyOfProps } from "../../utils/getCalcPropertyOfProps.ts";

LR.registerBlocks(LR);

const AdapterFileUploaderRegular = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-regular",
  elementClass: LR.FileUploaderRegular,
});

const CSS_SRC_REGULAR = getStyleSource("regular");

export const FileUploaderRegular: FC<TProps> = ({
  refUploadCtxProvider,
  ...props
}) => {
  const CTX_NAME = useMemo(() => LR.UID.generate(), [LR.UID.generate]);

  const { eventHandlers, config } = useMemo(
    () => getCalcPropertyOfProps<TProps>(props),
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

      <AdapterFileUploaderRegular
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_REGULAR}
      />
    </React.Fragment>
  );
};
