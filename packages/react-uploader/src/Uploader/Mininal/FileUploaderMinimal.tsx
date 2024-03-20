import React, { FC } from "react";
import * as LR from "@uploadcare/blocks";
import { createComponentFactory } from "@uploadcare/react-adapter";

import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

import type { TProps } from "../types";
import { CTX_NAME, CSS_SRC_MINIMAL } from "../default";

LR.registerBlocks(LR);

const AdapterFileUploaderMinimal = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-minimal",
  elementClass: LR.FileUploaderMinimal,
});

export const FileUploaderMinimal: FC<TProps> = ({
  ctxName = CTX_NAME,
  cssSrc = CSS_SRC_MINIMAL,

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
      <AdapterFileUploaderMinimal ctx-name={ctxName} css-src={cssSrc} />
    </React.Fragment>
  );
};
