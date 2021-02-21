const path = require('path')
const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, '../_includes/scss/main.scss')
const outputFile = path.join(__dirname, '../src/css/styles.css')


module.exports = class {
  data() {
    return {
      permalink: 'src/css/styles.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render() {
    const { css } = await sass.render({ file: inputFile })
    const output = new CleanCSS({}).minify(css.toString()).styles

    return `${output}`
  }
}