/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  plugins: [
    "@stylexjs",
    "@typescript-eslint",
    "react",
    "react-hooks",

    "react-native",
    "import",
    "jest",
    "testing-library",
    "prettier",
    "unused-imports",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    ecmaFeatures: {
      jsx: true,
    },
    project: path.join(__dirname, "tsconfig.eslint.json"),
  },
  ignorePatterns: [
    "*.d.ts",
    "package-type-helper.cjs",
    "package-type-helper.js",
    "rollup-config/*/**",
    "rollup-config/rollup-config.ts",
    "rollup.config.mjs",
  ],
  rules: {
    "@stylexjs/valid-styles": "error",

    "prettier/prettier": [
      "warn",
      {
        semi: false,
      },
      {
        usePrettierrc: false,
      },
    ],
    // ... your existing rules ...
    "react-hooks/exhaustive-deps": [
      "error",
      {
        additionalHooks: "(useAnimatedStyle|useDerivedValue|useAnimatedProps)",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "no-var": "warn",
    "no-throw-literal": "off",
    "no-unreachable": "warn",
    "import/no-anonymous-default-export": "off",
    "no-eq-null": "warn",
    "react/no-unescaped-entities": "off",
    "no-prototype-builtins": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "promise/always-return": "warn",
    "promise/no-return-wrap": "warn",
    "promise/param-names": "warn",
    "promise/catch-or-return": ["warn", { allowFinally: true }],
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "off",
    "promise/no-new-statics": "warn",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    "jest/no-disabled-tests": "off",
    "react-native/no-inline-styles": "off",
    "jest/no-commented-out-tests": "off",
    indent: ["off", 2],
    "@typescript-eslint/no-explicit-any": ["off"],
    semi: ["off"],
    "next/no-html-link-for-pages": "off",
    "import/no-default-export": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "react-native/no-color-literals": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["off", "double", { allowTemplateLiterals: true }],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    "react/react-in-jsx-scope": "off",
    // Use the custom rule 'react-in-scope' defined via require at the beginning
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      // If you're using custom module resolution, configure it here
    },
  },
  overrides: [
    {
      files: ["*.component.tsx"],

      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: "variable", format: ["camelCase", "PascalCase"] },
          { selector: "interface", format: ["PascalCase"] },
        ],
      },
    },
    {
      files: ["*.hook.tsx"],
      rules: {
        "import/no-default-export": "error",
      },
    },
  ],
  globals: {
    SwaggerEditor: true,
    JSX: true,
    React: true,
    window: true,
  },
}
