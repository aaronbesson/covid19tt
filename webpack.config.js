const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

// source: https://docs.expo.io/versions/latest/guides/customizing-webpack/
// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)
  if (config.mode === 'development') {
    config.devServer.compress = false
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === 'production') {
    config.optimization.minimize = false
  }
  config.resolve = {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
  config.module.rules = [{
    // Include ts, tsx, js, and jsx files.
    test: /\.(ts|jsx|js)x?$/,
    // exclude: /node_modules/,
    loader: 'babel-loader'
  }]
  return config
}