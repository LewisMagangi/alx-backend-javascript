import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node
      },
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: pluginJest
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/consistent-test-it": ["error", { fn: "test" }]
    }
  }
];