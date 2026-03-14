import sharedConfig from '@wcs-mn/eleventy-excellent-shared';

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(sharedConfig);
  eleventyConfig.addBundle('css', {hoist: true});

  // site-specific passthrough copies
  eleventyConfig.addPassthroughCopy('src/assets/wcsmn/');

  // ignore test files
  if (process.env.ELEVENTY_ENV != 'test') {
    eleventyConfig.ignores.add('src/common/pa11y.njk');
  }

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}
