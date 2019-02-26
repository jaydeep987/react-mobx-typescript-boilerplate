module.exports = (env) => {
  return require(`./webpack/webpack.${env}.config.js`);
}
