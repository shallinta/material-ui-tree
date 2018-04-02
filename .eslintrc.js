module.exports = {
  extends: [
    'eslint-config-qunar'
  ].map(require.resolve),
  rules: {
    'react/forbid-prop-types': 0
  }
};
