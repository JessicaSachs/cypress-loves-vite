const { startDevServer } = require('@cypress/vite-dev-server')
const WindiCSS = require('vite-plugin-windicss').default


module.exports = (on, config) => {
  const viteConfig = {
    plugins: [
      WindiCSS()
    ]
  }
  
  viteConfig.esbuild = viteConfig.esbuild || {}
  viteConfig.esbuild.jsxFactory = 'h'
  viteConfig.esbuild.jsxFragment = 'Fragment'
  viteConfig.logLevel = 'error'
  viteConfig.resolve = {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
  
  on('dev-server:start', (options) => {
    return startDevServer({ options, viteConfig })
  })
  return config
}
