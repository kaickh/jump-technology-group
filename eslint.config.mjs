import nextCore from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCore,
  ...nextTs,
  {
    ignores: [".next/**", "out/**", "infra/**", "node_modules/**", "coverage/**"],
  },
];

export default eslintConfig;
