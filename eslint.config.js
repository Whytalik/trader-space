import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {
      "no-undef": "off",
      "vue/valid-attribute-name": "off",
      "vue/no-parsing-error": [
        "error",
        {
          "invalid-first-character-of-tag-name": false,
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
