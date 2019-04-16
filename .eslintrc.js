module.exports = {
  extends: [
    'eslint-config-qunar'
  ].map(require.resolve),
  rules: {
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0
  }
};
