import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = {
  mode: 'production',
  entry: './src/component/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'MuiTree',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types'
    },
    'material-ui': {
      commonjs: 'material-ui',
      commonjs2: 'material-ui',
      amd: 'material-ui'
    },
    'material-ui-icons': {
      commonjs: 'material-ui-icons',
      commonjs2: 'material-ui-icons',
      amd: 'material-ui-icons'
    },
    'popper.js': {
      commonjs: 'popper.js',
      commonjs2: 'popper.js',
      amd: 'popper.js'
    },
    'css-vendor': {
      commonjs: 'css-vendor',
      commonjs2: 'css-vendor',
      amd: 'css-vendor'
    }
  }
};
