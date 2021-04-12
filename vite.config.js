const vue = require('@vitejs/plugin-vue')
const { defineConfig } = require('vite')
const WindiCSS = require('vite-plugin-windicss').default

module.exports = defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
});
