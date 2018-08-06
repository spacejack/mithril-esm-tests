import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: './src/index.ts',
  output: {
    file: './public/app.js',
    format: 'iife'
  },

  plugins: [
    nodeResolve(),
    typescript({
      tsconfig: 'tsconfig.rollup.json'
    })
  ]
}
