import dynamic from "next/dynamic";

export const FileUploaderMinimal = dynamic(
  () => import("./FileUploaderMinimal").then((mod) => mod.FileUploaderMinimal),
  { ssr: false },
);
