import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    banner: '#!/usr/bin/env node',
    file: 'dist/index.mjs',
    format: 'esm',
  },
  plugins: [commonjs(), resolve()],
};
