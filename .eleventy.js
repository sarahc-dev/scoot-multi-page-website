
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");

    return {
        // Change output directory so can host on Github Pages
        dir: {
            input: "src",
            output: "docs"
        }
    }
};