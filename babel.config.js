// eslint-disable-next-line import/no-extraneous-dependencies
const nu = require('@upman/node-utils');

const sourceConfig = require('./source-app/babel.config');

sourceConfig.plugins = sourceConfig.plugins || [];

sourceConfig.plugins.push(...[
  '@upman/babel-plugin-source-page',
  ['@upman/babel-plugin-transform-import-source', {
    mapper: nu.resolve('src/proxy-vue.js'),
  }],
]);

module.exports = sourceConfig;
