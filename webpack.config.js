module.exports = () => {
  return require(`./webpack/webpack.${process.env.NODE_ENV}.config.js`);
}
