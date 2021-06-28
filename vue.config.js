// const stencil = require('@stencil/webpack');
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
        .use("resolve-url-loader")
        .loader("resolve-url-loader")
        .options({
          sourceMap: true,
          // eslint-disable-next-line no-unused-vars
          join: (_rul_uri, _rul_base) => {
            // args must be included
            return (arg) => {
              return arg.bases.value.includes("@arcgis/core")
                ? arg.uri.replace("../", "./assets/esri/themes/")
                : arg.uri;
            };
          },
        })
        .before("sass-loader")
        .end()
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
