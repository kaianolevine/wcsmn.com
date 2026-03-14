#!/bin/sh
SHARED=node_modules/@wcs-mn/eleventy-excellent-shared/src

# Copy shared _layouts (no site overrides)
cp -r $SHARED/_layouts src/_layouts

# Copy shared _includes subdirectories individually so site-specific
# partials (footer.njk, header.njk etc.) are NOT overwritten
cp -r $SHARED/_includes/head src/_includes/head
cp -r $SHARED/_includes/schemas src/_includes/schemas
cp -r $SHARED/_includes/webc src/_includes/webc

# Copy shared partials individually, skipping ones the site overrides
for f in $SHARED/_includes/partials/*.njk; do
  base=$(basename "$f")
  # Only copy if the site does NOT have its own override
  if [ ! -f "src/_includes/partials/$base" ]; then
    cp "$f" "src/_includes/partials/$base"
  fi
done

# Copy remaining shared directories
cp -r $SHARED/common src/common
cp -r $SHARED/assets/svg src/assets/svg
cp -r $SHARED/assets/scripts src/assets/scripts
cp -r $SHARED/assets/fonts src/assets/fonts
cp -r $SHARED/assets/css src/assets/css
cp $SHARED/_data/helpers.js src/_data/helpers.js
cp -r $SHARED/_data/designTokens src/_data/designTokens

# Restore site-specific CSS override
git checkout -- src/assets/css/global/base/variables.css
