---
title: Introduction
lang: en-US
description: 'A modular WordPress starter theme powered by Bootstrap and Gulp'
---

<img src="/preview.png" alt="Bricks WordPress starter theme"/>

## Overview

[Bricks](https://github.com/stefanobartoletti/bricks) is a WordPress starter theme with builtin [Bootstrap](https://getbootstrap.com/) integration. It uses [Gulp](https://gulpjs.com/) to manage tasks commonly needed in WordPress development. 

It is built with modularity in mind, taking advantage of `get_template_part()` both for templates and for theme functions. 

It is jQuery-free, relying on VanillaJS both for its scripts and for external dependencies, including [Bootstrap Native](https://thednp.github.io/bootstrap.native/).

It is lightweight and SEO friendly, by optimizing all of its assets and using semantic HTML and best practices.

## Main features

  - [Bootstrap 4](https://getbootstrap.com/) (compiled from source Sass files, JavaScript from [Bootstrap Native](https://github.com/thednp/bootstrap.native/))
  - [WP Bootstrap Navwalker](https://github.com/wp-bootstrap/wp-bootstrap-navwalker)
  - Custom [Gulp](https://gulpjs.com/) tasks
  - [Font Awesome 5](https://fontawesome.com/) (*SVG with JavaScript version*, parsed and minified by [gulp-fa-minify](https://github.com/FA-Minify/gulp-fa-minify))
  - CSS bundling, including [Autoprefixer](https://autoprefixer.github.io/) and [PurgeCSS](https://purgecss.com/)
  - JavaScript bundling with [Rollup](https://www.rollupjs.org/) and [Babel](https://babeljs.io/)
  - [BrowserSync](https://www.browsersync.io/)
  - Automatic conversion of custom fonts into *woff/woff2* web formats
  - Support for localization by generation of a `.pot` [template file](https://developer.wordpress.org/themes/functionality/internationalization/)
  - Support for integration of some optional JavaScript libraries

## About 

I have built Bricks mainly for personal use, but I also believe that it has potential and could be an interesting project also for other developers: that's why after two years of internal development and testing I decided to release it publicly. It is, as a matter of fact, my first open-source project.

While suiting my needs and providing an excellent foundation for my web-development projects, it is of course improvable in many ways, and keeping it up-to-date is always an ongoing activity.

For these reasons, I kindly welcome any kind of feedback, suggestion and contribution, both for the theme itself and for this documentation. Both repositories are hosted on GitHub:

- theme: https://github.com/stefanobartoletti/bricks
- documentation: https://github.com/stefanobartoletti/bricks-docs

If you want to get in touch, you can find me on [GitHub](https://github.com/stefanobartoletti), [Twitter](https://twitter.com/ste_bartoletti) or [LinkedIn](https://www.linkedin.com/in/bartolettistefano).