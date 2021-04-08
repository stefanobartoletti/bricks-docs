---
title: Functions
lang: en-US
description: 'functions.php'
---

# {{ $frontmatter.title }}

Like everything else in this theme, `functions.php` is modularized, and its partials are located in `functions` folder. Your own custom functions and code snippets should be be put in `custom.php`.

## Details

### `setup.php`

WordPress standard theme setup, where theme supports are registered. (Read about [add_theme_support()](https://developer.wordpress.org/reference/functions/add_theme_support/) on the WordPress docs for reference).

### `imagesizes.php`

Image sizes definitions. These are technically part of the theme setup as described above, and placed on a separate file for convenience. These definitions are meant to be edited on a per-project basis, according to specific sizes required by custom templates (Read about [add_image_size()](https://developer.wordpress.org/reference/functions/add_image_size/) on the WordPress docs for reference).
### `enqueues.php`

Includes CSS and JavaScript files in the theme. More details are available on the [CSS](/theme/css/) and [JavaScript](/theme/javascript/) pages of this documentation. (Read about [Including CSS & JavaScript](https://developer.wordpress.org/themes/basics/including-css-javascript/) on the WordPress docs for reference).

### `navmenus.php`

Registers navigation menus. (Read about [Navigation Menus](https://developer.wordpress.org/themes/functionality/navigation-menus/) on the WordPress docs for reference).

### `sidebars.php`

Registers sidebars. (Read about [Sidebars](https://developer.wordpress.org/themes/functionality/sidebars/) on the WordPress docs for reference).

### `lib/class-wp-bootstrap-navwalker.php`

Includes WP Bootstrap Nav Walker, to integrate Bootstrap dropdown navs with WordPress native menu manager. (Read about [wp-bootstrap-navwalker](https://wp-bootstrap.github.io/wp-bootstrap-navwalker/) on its docs). 

### `functions/ctp/*.php`

Custom Post Types and Custom Taxonomies definitions. Every `*.php` file inside this folder will be automatically loaded in to the theme. Two boilerplate `*.php.sample` files are already present and can be used a starting points to define your custom content. (Read about [Custom Post Types](https://developer.wordpress.org/reference/functions/register_post_type/) and [Custom Taxonomies](https://developer.wordpress.org/reference/functions/register_taxonomy/) on the WordPress docs or on [GenerateWP](https://generatewp.com/)). 

### `globals.php`

### `integrations/acf.php`

### `integrations/cf7.php`

### `meta.php`

### `searchfilter.php`

### `cleanup.php`

### `custom.php`