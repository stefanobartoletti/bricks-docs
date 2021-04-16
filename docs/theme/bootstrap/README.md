---
title: Bootstrap
lang: en-US
description: 'Bricks WordPress starter theme Bootstrap integration'
---

# {{ $frontmatter.title }}

Bricks comes with a built-in integration with Bootstrap 4, which is included as a NPM package and is compiled from its source files. 

The template files already include components and classes from this framework, making it easy to quickly start a new project.

## CSS

Bootstrap's CSS is included from its source Sass files.

With this method, it is possible to create a custom Bootstrap theme. A subset of all Bootstrap variables used during compilation is available in `src/sass/_theme.scss`, which in turn is automatically loaded in to the main `style.scss` file.

This  file includes all the most important variables sourced directly from `node_modules/bootstrap/scss/_variables.scss`, allowing to customize colors and typography, set general options, and fine tune components (read more about [theming Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/theming/) in its official documentation).

::: tip
You are strongly encouraged to take advantage of this feature: with a Bootstrap custom theme a great deal of styling can be made directly from the source, this way less custom CSS rules are required afterwards. This allows for an easier development experience and better performances, thanks to a smaller final CSS bundle.
:::

The final CSS bundle is further processed and optimized with tools like Autoprefixer, PurgeCSS and CSSnano, then loaded from `functions/enqueues.php` (more info about the whole compilation process on [CSS](/theme/css/) page of this documentation).

## JavaScript

Bootstrap's JavaScript is not included from the base package, but from [Bootstrap Native](https://thednp.github.io/bootstrap.native/) instead, which doesn't have jQuery as a dependency.

The scripts are included from `src/js/bsnative.js`, which includes both Bootstrap Native and its required dependency Popper.js, then loaded from `functions/enqueues.php` (more info about this on [JavaScript](/theme/javascript/) page of this documentation).