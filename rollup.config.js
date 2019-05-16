import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'src/index.js',
  output: [{
    file: './dist/index.cjs.js',
    format: 'cjs'
  }, {
    file: './dist/index.es.js',
    format: 'es'
  }],
  external: ['react', 'react-dom', 'prop-types', 'classnames', '@material-ui/core@next', '@material-ui/icons@next', '@material-ui/styles@next'],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ],
}, {
  input: 'src/util.js',
  output: [{
    file: './dist/util.cjs.js',
    format: 'cjs'
  }, {
    file: './dist/util.es.js',
    format: 'es'
  }],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    terser()
  ],
}];