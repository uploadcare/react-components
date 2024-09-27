import dynamic from "next/dynamic";

export const FileUploaderRegular = dynamic(
  () => import("./FileUploaderRegular").then((mod) => mod.FileUploaderRegular),
  { ssr: false },
);
