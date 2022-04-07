const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 編譯時同步引入scss檔
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/style.scss";`
      }
    }
  }
})