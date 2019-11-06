import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  plugins: [commonjs()]
};