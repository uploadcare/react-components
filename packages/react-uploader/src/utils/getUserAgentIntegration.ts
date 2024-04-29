import { version } from "../../package.json";

const NAME_EXTENTION = "React-Uploader";

export const getUserAgentIntegration = () => {
  return `${NAME_EXTENTION}/${version}`;
};
