import React, { FC } from "react";
import * as LR from "@uploadcare/blocks";

import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

import { createComponentFactory } from "@uploadcare/react-adapter";

import { CTX_NAME, CSS_SRC_REGULAR } from "../default";
import type { TProps } from "../types";

LR.registerBlocks(LR);

const AdapterFileUploaderRegular = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-regular",
  elementClass: LR.FileUploaderRegular,
});

export const FileUploaderRegular: FC<TProps> = ({
  ctxName = CTX_NAME,
  cssSrc = CSS_SRC_REGULAR,

  // Events
  onFileAdded,
  onFileRemoved,
  onFileUploadStart,
  onFileUploadProgress,
  onFileUploadSuccess,
  onFileUploadFailed,
  onFileUrlChanged,
  onModalOpen,
  onModalClose,
  onDoneClick,
  onUploadClick,
  onActivityChange,
  onCommonUploadStart,
  onCommonUploadProgress,
  onCommonUploadSuccess,
  onCommonUploadFailed,
  onChange,
  onGroupCreated,

  // Config
  ...config
}) => {
  return (
    <React.Fragment>
      <AdapterConfig ctx-name={ctxName} {...config} />

      <AdapterUploadCtxProvider
        ctx-name={ctxName}
        onFileUploadStart={onFileUploadStart}
        onFileUploadFailed={onFileUploadFailed}
        onFileUploadSuccess={onFileUploadSuccess}
        onFileUploadProgress={onFileUploadProgress}
        onFileRemoved={onFileRemoved}
        onFileAdded={onFileAdded}
        onUploadClick={onUploadClick}
        onActivityChange={onActivityChange}
        onChange={onChange}
        onCommonUploadFailed={onCommonUploadFailed}
        onCommonUploadProgress={onCommonUploadProgress}
        onCommonUploadStart={onCommonUploadStart}
        onCommonUploadSuccess={onCommonUploadSuccess}
        onFileUrlChanged={onFileUrlChanged}
        onModalClose={onModalClose}
        onModalOpen={onModalOpen}
        onDoneClick={onDoneClick}
        onGroupCreated={onGroupCreated}
      />

      <AdapterFileUploaderRegular ctx-name={ctxName} css-src={cssSrc} />
    </React.Fragment>
  );
};
