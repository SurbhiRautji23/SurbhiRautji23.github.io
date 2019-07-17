module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/SurbhiRautji23.github.io/' : '/',
  outputDir: 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
