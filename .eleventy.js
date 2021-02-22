module.exports = function(eleventyConfig) {
    // So 11ty can use the files inside these folders
    //eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/js");

    return {
        // Change output directory so can host on Github Pages. In Github change the 'source' to /docs
        dir: {
            input: "src",
            output: "docs"
        }
    }
};