const CopyPlugin = require('copy-webpack-plugin');

const jsapi = '@arcgis/core';

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          // calcite assets
          {
            context: 'node_modules/@esri/calcite-components/dist/calcite/',
            from: '**',
            to: './',
          },
        // arcgis assets
        {
          context: 'node_modules',
          from: `${jsapi}/assets`,
          to: './assets',
          globOptions: {
            // ignore the webscene spec folder, sass files,
            ignore: ['**/webscene/spec/**', '**/*.scss'],
          },
        },
        ]
      }),
    ]
  },
  chainWebpack: (config) => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((rule) => {
      config.module
        .rule('scss')
        .oneOf(rule)
        .use('css-loader')
        .loader('css-loader')
        .tap((options) => ({ ...options, url: false, importLoaders: 2 }))
        .end()
    });
  },
  css: {
    extract: {
      filename: '[name].css',
      chunkFilename: '[name].css',
    },
  },
};
