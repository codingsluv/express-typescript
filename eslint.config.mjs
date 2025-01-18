import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  {parser: "@typescript-eslint/parser"},
  {plugins: ["@typescript-eslint"]},
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {ignorePatterns: ["**/build/*", "**/node_modules/*", "**/public/*"]},
];