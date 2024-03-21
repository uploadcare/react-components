//@ts-nocheck
import React, { FC } from "react";
import * as LR from "@uploadcare/blocks";

import { AdapterConfig } from "../core/AdapterConfig";
import { AdapterUploadCtxProvider } from "../core/AdapterUploadCtxProvider";

import { createComponentFactory } from "@uploadcare/react-adapter";

import { getStyleSource } from "../default";
import type { TProps } from "../types";

LR.registerBlocks(LR);

const AdapterFileUploaderRegular = createComponentFactory({
  react: React,
  tagName: "lr-file-uploader-regular",
  elementClass: LR.FileUploaderRegular,
});

const CSS_SRC_REGULAR = getStyleSource("regular");

export const FileUploaderRegular: FC<TProps> = ({
  refUploadCtxProvider,

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
        ref={refUploadCtxProvider}
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

      <AdapterFileUploaderRegular
        ctx-name={CTX_NAME}
        css-src={CSS_SRC_REGULAR}
      />
    </React.Fragment>
  );
};
