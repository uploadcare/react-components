import dynamic from "next/dynamic";

export const FileUploaderInline = dynamic(
  () => import("./FileUploaderInline").then((mod) => mod.FileUploaderInline),
  { ssr: false },
);
