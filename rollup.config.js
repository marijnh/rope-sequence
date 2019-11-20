import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.es.js',
    format: 'esm'
  },
  plugins: [commonjs()]
};
