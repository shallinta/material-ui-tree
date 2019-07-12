import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

export default [{
  input: 'src/index.js',
  output: [{
    file: './lib/index.cjs.js',
    format: 'cjs'
  }, {
    file: './lib/index.es.js',
    format: 'es'
  }],
  external: ['react', 'react-dom', 'prop-types', 'classnames', '@material-ui/core', '@material-ui/icons', '@material-ui/styles'],
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
    file: './lib/util.cjs.js',
    format: 'cjs'
  }, {
    file: './lib/util.es.js',
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
