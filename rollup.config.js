import buble from '@rollup/plugin-buble'

export default {
  input: 'index.js',
  output: [{
    file: 'dist/index.js',
    format: 'esm'
  }, {
    file: 'dist/index.cjs',
    format: 'cjs'
  }],
  plugins: [buble()]
}
