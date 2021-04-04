const { startDevServer } = require('@cypress/vite-dev-server')
const WindiCSS = require('vite-plugin-windicss').default


module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    const viteConfig = {
      plugins: [
        WindiCSS()
      ]
    }
    viteConfig.esbuild = viteConfig.esbuild || {}
    viteConfig.esbuild.jsxFactory = 'h'
    viteConfig.esbuild.jsxFragment = 'Fragment'
    viteConfig.logLevel = 'error'

    return startDevServer({ options, viteConfig })
  })
  return config
}
