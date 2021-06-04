---
title: CSS
lang: en-US
description: 'How Bricks WordPress starter theme manages CSS'
---

# {{ $frontmatter.title }}

Bricks uses Sass in its source stylesheets, which Gulp processes also with Autoprefixer and PurgeCSS. The source folder is `src/sass`, while the compiled stylesheet is placed in `dist/css`.

## Sources

Bricks takes advantage of the default Sass modularization system, by splitting its stylesheet in several partial files, which are all imported in the main `style.scss`.

According to Sass standards, partials are prefixed with an underscore (i.e. `_theme.scss`) and are not individually processed by the compiler, but are imported in the main file with `@import` rules.

::: warning
Sass discourages the use of the `@import` rule in favor of the new standard `@use`, but the latter is not yet supported by Node Sass implementation, which is used by Gulp.
:::

Besides the main file, some other partials have a specific purpose:

-   **`_fontface.scss`**, that contains `@font-face` definitions used for importing local fonts. It is disabled by default and you should manually uncomment its entry inside `styles.scss` (more info about this on the [Fonts](/theme/fonts/) page).
-   **`_theme.scss`**, that includes a selection of the most common Bootstrap variables, ready to be customized for theming (more info about this on the [Bootstrap](/theme/bootstrap/) page).
-   **`_globals.scss`**, used for any CSS rule that you want to apply throughout the whole site, to easily store them in a single place.
-   **`integrations/_wpcore.scss`**, that includes some required CSS rules used for [WordPress generated classes](https://codex.wordpress.org/CSS#WordPress_Generated_Classes).

The other Sass partials are placed in sub-folders of `src/sass`, and are used to style single pages or components. You can follow this setup and put in these sub-folders your own additional files too.

Some optional libraries integrations are also included from `style.scss`, but disabled by default (more info about this on the [integrations](/integrations/) section of this documentation).

## Bundling

Gulp takes care of processing source Sass files, but with some differences from Development and Production environments (more info about environments on the [Scripts](/theme/scripts/) page).

Both in **Development** and **Production**:

-   Sass files are compiled and bundled together.
-   Source files are processed by Autoprefixer.

Only in **Development**:

-   Sourcemaps (`*.css.map`) are created.

Only in **Production**:

-   Source files are processed by PurgeCSS.
-   The final bundles are minified with CleanCSS.

## Tree Shaking

Bricks uses PurgeCSS to tree shake its source Sass files and reduce the final bundle size. By default only Bootstrap sources  are processed this way, any custom rule that you will write in your own partials will be untouched and will be present in the compiled stylesheet.

PurgeCSS is configured to scan all `*.php` files present inside the theme root folder and all `*.js` files inside `src/js`, and remove all unused rules that it finds in the source Sass files.

You can define a safelist for any selector that you don't want to be purged with the `cssWhitelist` setting that is located inside `bricks.config.js` (i.e. for any selector that you might use in a Contact Form 7 configuration, that can't be scanned by PurgeCSS)

You should read [PurgeCSS documentation](https://purgecss.com/) for more details about its use.

::: warning
PurgeCSS is a powerful tool but it can be tricky if not used properly. If you experience problems caused by its use and you want to disable it, you can set `enable.purgecss` setting to `false` (it is located in `bricks.config.js`).
:::

## Enqueues

Bricks uses the standard WordPress `wp_enqueue_style()` function to to include CSS files, and it does so from `functions/enqueues.php`.

In example, the main theme stylesheet is included like this:

```php
wp_enqueue_style('brk-styles', get_template_directory_uri() .'/dist/css/style.min.css');
```
