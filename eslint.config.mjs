import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      eqeqeq: 0,
      "no-unused-vars": 2,
      "prefer-const": [2, { ignoreReadBeforeAssign: true }],
    },
  },
  {
    ignores: [".node_modules/*"],
  },
];
