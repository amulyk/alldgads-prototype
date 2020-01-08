const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withSass = require('@zeit/next-sass');

const withImages = require('next-images');

module.exports = withPlugins([
  [withBundleAnalyzer, {}],
  [withSass, {
    cssModules: true
  }],
  [withImages, {ignoreTypes: ["svg"],}]
]);
