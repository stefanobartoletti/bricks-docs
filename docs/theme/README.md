---
title: Introduction
lang: en-US
description: 'A modular WordPress starter theme powered by Bootstrap and Gulp'
---

# {{ $frontmatter.title }}

## Overview

[Bricks](https://github.com/stefanobartoletti/bricks) is a WordPress starter theme with builtin Bootstrap integration. It uses Gulp to manage tasks commonly needed in WordPress development. 

It is built with modularity in mind, taking full advantage of `get_template_part()` both for templates and for theme functions. 

It is jQuery-free, relying on VanillaJS both for its scripts and for external dependencies, including Bootstrap Native.

It is lightweight and SEO friendly, by optimizing all of its assets and using semantic HTML and best practices.

## Main features

  - [Bootstrap 4](https://getbootstrap.com/) (compiled from source Sass files, JavaScript from [Bootstrap Native](https://github.com/thednp/bootstrap.native/))
  - [WP Bootstrap Navwalker](https://github.com/wp-bootstrap/wp-bootstrap-navwalker)
  - Custom [Gulp](https://gulpjs.com/) tasks
  - [Font Awesome 5](https://fontawesome.com/) (*SVG with JavaScript* version, parsed and minified by [gulp-fa-minify](https://github.com/FA-Minify/gulp-fa-minify))
  - CSS bundling, including [Autoprefixer](https://autoprefixer.github.io/) and [PurgeCSS](https://purgecss.com/)
  - JavaScript bundling with [Rollup](https://www.rollupjs.org/) and [Babel](https://babeljs.io/)
  - [BrowserSync](https://www.browsersync.io/)
  - Automatic conversion of custom fonts into *woff2* web format
  - Support for localization by generation of a `.pot` [template file](https://developer.wordpress.org/themes/functionality/internationalization/)
  - Support for integration of some optional JavaScript libraries

---

::: warning
Bricks was born as a personal project, and should be currently considered as a beta. It is perfectly usable and it is already a good foundation for a WordPress project, but there is room for improvement, and changes, even relevant ones, should be expected.

Contributions are warmly welcome, especially about: 
  - code quality
  - best practices
  - open-source project standards 
:::