import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: {
    file: './public/app.js',
    output: 'iife'
  },

  plugins: [
    typescript({
      tsconfig: 'tsconfig.rollup.json'
    })
  ]
}
