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
    'material-ui': {
      commonjs: 'material-ui',
      commonjs2: 'material-ui',
      amd: 'material-ui'
    },
    'material-ui-icons': {
      commonjs: 'material-ui-icons',
      commonjs2: 'material-ui-icons',
      amd: 'material-ui-icons'
    }
  }
};
