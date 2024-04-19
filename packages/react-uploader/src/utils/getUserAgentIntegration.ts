import { version, name } from "../../package.json";

export const getUserAgentIntegration = (pubkey: string) => {
  return `${name}/${version}/${pubkey} (JavaScript; React;)`;
};
