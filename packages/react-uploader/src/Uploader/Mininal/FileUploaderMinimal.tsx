//@ts-nocheck
import React, { FC } from "react";
import * as LR from "@uploadcare/blocks";
import { createComponentFactory } from "@uploadcare/react-adapter";

import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

import type { TProps } from "../types";
import { getStyleSource } from "../default";

LR.registerBlocks(LR);

const AdapterFileUploaderMinimal = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-minimal",
  elementClass: LR.FileUploaderMinimal,
});

const CSS_SRC_MINIMAL = getStyleSource("minimal");

export const FileUploaderMinimal: FC<TProps> = ({
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
  const CTX_NAME = LR.UID.generate();

  return (
    <React.Fragment>
      <AdapterConfig ctx-name={CTX_NAME} {...config} />
      <AdapterUploadCtxProvider
        ctx-name={CTX_NAME}
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
      <AdapterFileUploaderMinimal
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_MINIMAL}
      />
    </React.Fragment>
  );
};
