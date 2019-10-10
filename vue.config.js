const nu = require('@upman/node-utils');
const SoucePageMapPlugin = require('@upman/webpack-plugin-souce-page-map');

const sourceVueConfig = require('./source-app/vue.config');

const originChainWebpack = sourceVueConfig.chainWebpack;

sourceVueConfig.chainWebpack = (config) => {
  if (originChainWebpack) {
    originChainWebpack(config);
  }

  config.mode('development');
  config.optimization.minimize(false);

  config.resolve.alias
    .set('@', nu.resolve('source-app/src'))
    .set('source@', nu.resolve('source-app'));

  config.plugin('source-page-map')
    .use(SoucePageMapPlugin, [{
      routersPath: 'src/routes.js',
      sourceRoutersPath: 'source-app/src/routes.js',
    }]);
  config.module.rule('vue')
    .use('record-source-page')
    .loader('@upman/record-source-page-loader')
    .before('vue-loader');
  config.module.rule('vue')
    .use('record-tags')
    .loader('@upman/record-tags-loader')
    .before('vue-loader');
}

module.exports = sourceVueConfig;
