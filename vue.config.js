const path = require('path')

module.exports = {  
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: './',  
  // 输出文件目录
  outputDir: 'dist',  
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,  
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,  
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,  
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,  
  // css相关配置

  // 是否使用 thread-loader
  //parallel: require('os').cpus().length > 1, 
  // PWA 插件相关配置
  pwa: {}, 
  // webpack-dev-server 相关配置
  devServer: {
    //open: true,
   // host: 'localhost',
    //port: 8080,
    https: false,
    //hotOnly: false,   
    // http 代理配置
    proxy: {      
      '/api': {
        target: 'https://app.armzlegends.com',
        changeOrigin: true,
        pathRewrite: {          
            '^/api': ''
        }
      }
    },
    // before: (app) => {}
  }, 
  // 第三方插件配置
  pluginOptions: {

  },
  
}