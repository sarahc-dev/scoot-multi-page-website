module.exports = {
    dir: {
        input: "src",
        output: "docs"
    }
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("js");
};