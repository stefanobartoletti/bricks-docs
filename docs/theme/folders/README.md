---
title: Folder Structure
lang: en-US
description: 'Bricks theme folder structure'
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

Support for Advanced Custom Fields [local JSON](https://www.advancedcustomfields.com/resources/local-json/) (more details on [ACF](/integrations/acf) page. You can delete this directory if you don't use this feature).
### `dist`

Compiled resources coming from `src` and built by Gulp, directly loaded into the theme.

::: warning
The contents of this folder are deleted and overwritten by compiling tasks. You should not put anything here manually
:::


### `functions`

Modularization of `functions.php` WordPress file.

#### `functions/cpt`

[Custom Post Types](https://developer.wordpress.org/reference/functions/register_post_type/) and [Custom Taxonomies](https://developer.wordpress.org/reference/functions/register_taxonomy/) definitions.   
Two `*.php.sample` files are already present and ready to be customized by renaming them to `*.php` (Any `*.php` file present in this folder will be automatically loaded in to the theme)

#### `functions/lib`

Third-party php resources. [wp-bootstrap-navwalker](https://github.com/wp-bootstrap/wp-bootstrap-navwalker) is already present, you can add here more php libraries you might need to include.

### `languages`

Translations support. The source `template.pot` template file is located here, you shuld put here also actual `*.po` and `*.mo` translation files 

### `src`

Uncompiled resource files, ready to be edited and customized. They will be compiled in `dist` by Gulp.

#### `src/fonts`

Custom font files (*ttf/otf* will be converted into web formats, *woff/woff2* will be simply copied).

#### `src/img`

Source images (will be optimized with imagemin).

#### `src/js`

Source JavaScript files (will be bundled by Rollup).
    
#### `src/sass`

Source Sass files (will be optimized by PurgeCSS and Autoprefixer).

### `templates`

Template files partials, to be called with `get_template_part()`. Bricks default template files are modularized and split in order to mimic a component-based development.

::: tip
You are encouraged to take advantage of the [get_template_part()](https://developer.wordpress.org/reference/functions/get_template_part/) WordPress function as well, to keep your code clean, simple and easily maintainable.
:::