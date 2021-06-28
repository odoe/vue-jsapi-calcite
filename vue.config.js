const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [{
          from: '**',
          context: 'node_modules/@esri/calcite-components/dist/calcite/',
          to: './',
        }]
      }),
    ]
  },
  chainWebpack: (config) => {
    ["vue-modules", "vue", "normal-modules", "normal"].forEach((rule) => {
      config.module
        .rule("scss")
        .oneOf(rule)
        .use("sass-loader")
        .loader("sass-loader")
        .tap((options) => ({ ...options, sourceMap: true }))
        .end()
        .use("css-loader")
        .loader("css-loader")
        .tap((options) => ({ ...options, url: false, importLoaders: 2 }))
        .end()

    });
  },
};
