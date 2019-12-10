const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

var getTransformer = require('ts-transform-graphql-tag').getTransformer;

// module.exports = withBundleAnalyzer({});
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ts?$/,
      loader: 'awesome-typescript-loader',
      options: {
        getCustomTransformers: () => ({ before: [getTransformer()] })
      }
    });
  }
}
