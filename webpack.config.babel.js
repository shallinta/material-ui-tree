import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

module.exports = {
  mode: 'production',
  entry: 'src/component/index.js',
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  externals: {
    'material-ui': {
      commonjs: 'material-ui',
      commonjs2: 'material-ui',
      amd: 'material-ui'
    }
  }
};
