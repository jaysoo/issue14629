const { composePlugins, withNx } = require('@nrwl/webpack');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

const defaultConfig = {
  ...baseConfig,
};

module.exports = composePlugins(withModuleFederation(defaultConfig), config => {
  config.context = __dirname;
  return config;
});
