import js from "@eslint/js";
import globals from "globals";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
