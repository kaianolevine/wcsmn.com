#!/bin/sh
SHARED=node_modules/@wcs-mn/eleventy-excellent-shared/src

# Copy shared directories
cp -r $SHARED/_layouts src/_layouts
cp -r $SHARED/_includes src/_includes
cp -r $SHARED/common src/common
cp -r $SHARED/assets/svg src/assets/svg
cp -r $SHARED/assets/scripts src/assets/scripts
cp -r $SHARED/assets/fonts src/assets/fonts
cp -r $SHARED/assets/css src/assets/css
cp $SHARED/_data/helpers.js src/_data/helpers.js
cp -r $SHARED/_data/designTokens src/_data/designTokens

# Restore site-specific overrides (these overwrite the shared copies)
# variables.css is site-specific — restore from git
git checkout -- src/assets/css/global/base/variables.css
