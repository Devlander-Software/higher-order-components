import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fs from "fs";
import { terser } from "rollup-plugin-terser";
import stylex from "@stylexjs/rollup-plugin";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const extensions = [".js", ".jsx", ".ts", ".tsx", ".native.js"];

// Exclude certain dependencies from being bundled
const external = [
  "react",
  "react-dom",
  "react-native-web", // Add more peer dependencies here
  "react-native"
];

const globals = {
  react: "React",
  "react-native": "reactNative",
  "react-native-web": "reactNativeWeb"
};

const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join("|")})($|/)`);
  return id => pattern.test(id);
};

export default {
  input: "src/index.tsx", // Your entry point
  output: [
    {
      file: packageJson.main,
      format: "umd",
      name: "DevlanderHigherOrderComponents", // Replace with your library's name
      globals: globals,
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      globals: globals,
      sourcemap: true,
    }
  ],
  external: makeExternalPredicate(external),
  plugins: [
    nodeResolve({
      extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "bundled",
      exclude: /node_modules/,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    typescript(),
    json(),
    terser(), // Use terser for minification
    stylex(), // Add stylex plugin
  ],
};
