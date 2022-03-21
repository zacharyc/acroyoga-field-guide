module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Sort posts by file name
  eleventyConfig.addCollection("sortedPoses", (collection) =>
    collection.getFilteredByGlob("Poses/*.md").sort((a, b) => {
      return a.inputPath > b.inputPath;
    })
  );

  return {
    passthroughFileCopy: true,
  };
};
