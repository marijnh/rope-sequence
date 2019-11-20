import commonjs from 'rollup-plugin-commonjs'
import buble from '@rollup/plugin-buble'

export default {
  input: 'index.js',
  output: [{
    file: 'dist/index.es.js',
    format: 'esm'
  }, {
    file: 'dist/index.js',
    format: 'cjs'
  }],
  plugins: [commonjs(), buble()]
}
