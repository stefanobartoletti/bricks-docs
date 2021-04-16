---
title: Folder Structure
lang: en-US
description: 'Bricks Wordpress starter theme folder structure'
---

# {{ $frontmatter.title }}

## Overview

```
(theme root)
├─ acf-json
├─ dist
├─ functions
│  ├─ cpt
│  └─ lib
├─ languages
├─ node_modules
├─ src
│  ├─ fonts
│  ├─ img
│  ├─ js
│  └─ sass
└─ templates
```

## Folder Details

### `acf-json`

Support for Advanced Custom Fields [local JSON](https://www.advancedcustomfields.com/resources/local-json/). You can delete this directory if you don't use this feature (more details on [ACF](/integrations/acf/) page).
### `dist`

Compiled resources coming from `src` and built by Gulp, directly loaded into the theme.

::: warning
The contents of this folder are automatically updated and overwritten by compiling tasks. You should not manually edit anything here.
:::


### `functions`

Modularization of `functions.php` WordPress file (more details on [Functions](/theme/functions/) page).

#### `functions/cpt`

[Custom Post Types](https://developer.wordpress.org/reference/functions/register_post_type/) and [Custom Taxonomies](https://developer.wordpress.org/reference/functions/register_taxonomy/) definitions.   
Two `*.php.sample` files are already present. You can rename them to `*.php` and start customizing them to your needs (Any `*.php` file present in this folder will be automatically loaded in to the theme)

#### `functions/lib`

Third-party php resources. [WP Bootstrap Navwalker](https://github.com/wp-bootstrap/wp-bootstrap-navwalker) is already present, you can add here more php libraries you might need to include.

### `languages`

Translations support. The source `template.pot` template file is located here, you shuld put here also actual `*.po` and `*.mo` translation files (more details on [Localization](/theme/localization/) page).

### `src`

Uncompiled resource files, ready to be edited and customized. They will be compiled to `dist` by Gulp.

#### `src/fonts`

Source custom font files (*otf/ttf* fonts will be converted into *woff2* web format, while *woff/woff2* fonts will be simply copied).

#### `src/img`

Source images (will be optimized with imagemin).

#### `src/js`

Source JavaScript files (will be bundled by Rollup).
    
#### `src/sass`

Source Sass files (will be optimized by PurgeCSS and Autoprefixer).

### `templates`

Template files partials, to be called with `get_template_part()`. Bricks templates are modularized and split into partial files, in order to keep an ordered stucture and provide a component-like development experience.

::: tip
You are encouraged to take advantage of [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) and modularize your own custom templates as well, to keep your code clean, simple and easily maintainable.
:::