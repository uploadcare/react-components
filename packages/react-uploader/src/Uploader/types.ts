import type { Ref } from "react";
import type {
  ConfigType,
  UploadCtxProvider,
  EventMap,
} from "@uploadcare/blocks";

type TToCamelCase<S extends string> = S extends `${infer Head}-${infer Tail}`
  ? `${Lowercase<Head>}${Capitalize<TToCamelCase<Tail>>}`
  : Lowercase<S>;

type TExtraPrefixOn<S extends string> = `on${Capitalize<S>}`;

type TPrefixOnAndCamelCase<S extends string> = TExtraPrefixOn<TToCamelCase<S>>;

export type TEventsSchema = {
  [K in keyof EventMap as TPrefixOnAndCamelCase<K>]: (
    event: EventMap[K]["detail"],
  ) => void;
};

type TRefUploadCtxProvider = {
  apiRef?: Ref<InstanceType<UploadCtxProvider>>;
};

type TPropsWithEvents = Partial<TEventsSchema>;

type TPropsWithConfig = Partial<ConfigType>;

type TDefaultProps = {
  className?: string;
  classNameUploader?: string;
  ctxName?: string;
};

export type TProps = TDefaultProps &
  TRefUploadCtxProvider &
  TPropsWithEvents &
  TPropsWithConfig;

export { UploadCtxProvider } from "@uploadcare/blocks";
