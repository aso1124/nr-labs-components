import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

function getPlugins() {
  return [
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: []
    }),
    resolve(),
    commonjs()
  ];
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: getPlugins()
};
