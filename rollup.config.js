import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

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
    terser({
      keep_fnames: true
    }),
    copy({
      targets: [
        { src: 'types/index.d.ts', dest: 'lib' }
      ]
    })
  ],
}, {
  input: 'src/util.js',
  output: [{
    file: './lib/util.cjs.js',
    format: 'cjs'
  }, {
    file: './lib/util.js',
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
    terser(),
    copy({
      targets: [
        { src: 'types/util.d.ts', dest: 'lib' }
      ]
    })
  ],
}];
