module.exports = {
  presets: [
    '@babel/env'
  ],
  plugins: [["@babel/transform-runtime", {
      "regenerator": true
    }]]
}