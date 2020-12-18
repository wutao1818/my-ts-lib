import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import purl from "rollup-plugin-url";
import json from 'rollup-plugin-json';

export default {
    input: 'src/index.ts', // Path relative to package.json
    output: {
        name: 'myibrary',
        exports: 'named',
    },
    external: ['vue', 'axios'],
    plugins: [
      postcss({
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']  
          }),
          url({ 
            url: 'inline'
          })
        ]  
      }),
      purl({
        limit: 10 * 1024,
        include: [
          "**/*.svg",
          "**/*.png",
          "**/*.jpg",
          "**/*.gif",
        ], // defaults to .svg, .png, .jpg and .gif files
        emitFiles: true,
        fileName: "[dirname][hash][extname]",
        sourceDir: path.join(__dirname, "src")
      }),
      typescript(),
      vue({
          css: true, // Dynamically inject css as a <style> tag
          compileTemplate: true, // Explicitly convert template to render function
      }),
      buble(), // Transpile to ES5
      babel({
        runtimeHelpers: true,
        sourceMap: false,
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
        exclude: 'node_modules/**'
      }),
      json(),
      resolve(),
      commonjs() 
    ],
};