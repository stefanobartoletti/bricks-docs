---
title: Configuration
lang: en-US
description: 'How to configure Bricks WordPress starter theme'
---

# {{ $frontmatter.title }}

Some configuration variables are available in `bricks.config.js`.

## Project Variables

These options, listed under **Project Variables**, can be edited on a per-project basis:

-   **`textdomain`**: WordPress theme [text domain](https://developer.wordpress.org/themes/functionality/internationalization/#text-domain), used for localizations. Usually you can use the default value. If you edit this, `yarn build` will update all localization functions with the new value (Please note that you also need to manually set this value in `load_theme_textdomain()` inside `functions/setup.php` if you edit this variable).
-   **`siteURL`**: local development URL, used by BrowserSync as the [local proxy](https://www.browsersync.io/docs/api#api-init).
-   **`enable.purgecss`**: enable use of [PurgeCSS](https://purgecss.com/) when bundling CSS for Production.
-   **`cssSafelist`**: an array of values used as a safelist for PurgeCSS (see [CSS](/theme/css/) page for more details).
-   **`faIconSafelist`**: a whitelist of icons used by *gulp-fa-minify* to minify FontAwesome 5 (see [Icons](/theme/icons/) page for more details).

## Path Variables

**Path Variables** define paths used by Gulp tasks, such as source and destination directories for compiled assets. They usually should be left unmodified.
