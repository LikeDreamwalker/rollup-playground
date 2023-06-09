import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "iife",
      entryFileNames: "testSDK.min.js",
    },
    plugins: [
      nodeResolve({
        exportConditions: "module",
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        exclude: "**/node_modules/**",
        extensions: [".js", ".ts"],
      }),

      // 压缩代码
      terser({
        mangle: {
          safari10: true,
        },
        safari10: true,
      }),
    ],
  },
];
