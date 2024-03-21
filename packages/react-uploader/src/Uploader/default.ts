// @ts-nocheck
import { PACKAGE_VERSION } from "@uploadcare/blocks";

export type TTypeUploader = "regular" | "minimal" | "inline";

export const getStyleSource = (typeUploader: TTypeUploader) =>
  `https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-${typeUploader}.min.css`;
