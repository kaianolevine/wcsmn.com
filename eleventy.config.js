import sharedConfig from '@wcs-mn/eleventy-excellent-shared';
import { buildAllCss } from './src/_config/events/build-css.js';

export default async function (eleventyConfig) {
  eleventyConfig.on('eleventy.before', async () => {
    await buildAllCss();
  });
  eleventyConfig.addPlugin(sharedConfig);

  // site-specific passthrough copies
  eleventyConfig.addPassthroughCopy('src/assets/wcsmn/');
  eleventyConfig.addPassthroughCopy('src/assets/css/');

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
