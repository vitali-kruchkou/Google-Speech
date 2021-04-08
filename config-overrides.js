/* eslint-disable @typescript-eslint/no-var-requires */
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@modules': 'src/modules',
    '@routes': 'src/routes',
    '@store': 'src/store',
    '@assets': 'src/assets',
    '@guards': 'src/guards',
    '@firebaseConfig': 'src/firebase',
  })(config);

  return config;
};
