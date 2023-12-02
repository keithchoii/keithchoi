module.exports = config => {
    config.addPassthroughCopy('src/style.css');
    config.addPassthroughCopy('src/images/');

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src'
        }
    };
};
