module.exports = {
  css: {
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('iview-loader')
      .loader('iview-loader')
      .tap(options => {
        return {
          prefix: true
        }
      })
  }
}
