const shortcodes = require('./utils/shortcodes.js');
const iconsprite = require('./utils/iconsprite.js');

module.exports = function(config) {
    // So 11ty can use the files inside these folders
    //eleventyConfig.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/images");
    config.addPassthroughCopy("src/js");

        // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        config.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    // Icon Sprite
    config.addNunjucksAsyncShortcode('iconsprite', iconsprite)

    return {
        // Change output directory so can host on Github Pages. In Github change the 'source' to /docs
        dir: {
            input: "src",
            output: "docs"
        }
    }
};