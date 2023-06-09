import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default [
  {
    input: "./src/index.ts",
    output: {
      file: "playground/src/autotrack/autotrack.min.js",
      format: "iife",
      entryFileNames: "autotrack.min.js",
      sourcemap: true,
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
      // 热更新 默认监听根文件夹
      livereload(),
    ],
  },
];
