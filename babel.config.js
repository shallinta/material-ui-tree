module.exports = {
  presets: [
    ['@babel/preset-env', {
      // useBuiltIns: 'usage',
      modules: false,
      targets: {
        browsers: [
          '> 1%',
          'Android >= 4.4',
          'IOS >= 7',
          'ie >= 9'
        ]
      }
    }],
    '@babel/preset-react'
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ]
};