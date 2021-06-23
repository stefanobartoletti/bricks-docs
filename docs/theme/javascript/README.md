---
title: JavaScript
lang: en-US
description: 'How Bricks WordPress starter theme manages JavaScript'
---

# {{ $frontmatter.title }}

Bricks uses Rollup and Babel to respectively bundle and transpile JavaScript code. The source folder is `src/js`, while the compiled resources are placed in `dist/js`.

## Sources

JavaScript code is intended to be written with the same modularity principles on which the entire Bricks is based, and according to this is split in several files.

Gulp takes any `*.js` file placed **directly** inside `src/js` as a source, and individually compiles each one of them.

By default, two of these top-level files are included:

-   **`scripts.js`**, the main file which acts as the index where all other single sub-modules are included. You should not write your scripts here, buth rather use sub-files.
-   **`bootstrap.js`**, that bundles together Bootstrap and its required dependency Popper.

Your own custom scripts should be written in their own files, placed in sub-folders of `src/js`, that you must then individually include in `scripts.js`.

::: tip
Bricks comes with a couple of components out of the box, which you can take as a reference on how to structure your code (i.e. `src/js/components/backtotop.js`).
:::

Some optional libraries integrations are also included from `scripts.js`, but disabled by default (more info about this on the [integrations](/integrations/) section of this documentation).

## Bundling

Gulp takes care of processing source JavaScript files, but with some differences from Development and Production environments (more info about environments on the [Scripts](/theme/scripts/) page).

Both in **Development** and **Production**:

-   Source files are bundled with Rollup.
-   Source code is transpiled by Babel (i.e. ES6 will be converted into browser-readable code).

Only in **Development**:

-   Sourcemaps (`*.js.map`) are created.

Only in **Production**:

-   The final bundles are minified with [Terser](https://terser.org/).

## Enqueues

Bricks uses the standard WordPress `wp_enqueue_script()` function to to include JavaScript files, and it does so from `functions/enqueues.php`.

In example, the two main JavaScript mentioned above are included like this:

```php
wp_enqueue_script('bootstrap-bundle', get_template_directory_uri() .'/dist/js/bootstrap.min.js', false, null, true );
wp_enqueue_script('brk-scripts', get_template_directory_uri() .'/dist/js/scripts.min.js', false, null, true );
```

---

::: warning
Bricks relies on plain JavaScript for both its native scripts and for external dependencies, like its optional libraries, which are chosen to be as much lightweight and dependency-free as possible.

WordPress natively includes jQuery and many plugins rely on it to work properly, so you can use it even in your custom theme if you really need it. Anyway, jQuery is not actively supported by Bricks and its use is not encouraged.
:::
