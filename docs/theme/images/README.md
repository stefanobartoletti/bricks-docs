---
title: Images
lang: en-US
description: 'How Bricks manages images'
---

# {{ $frontmatter.title }}

Bricks comes with a custom Gulp task that helps you optimize images. The source folder where you should place these images is `src/img`.

Supported formats are `*.jpg`, `*.png`, `*.gif` and `*.svg`. They will be optimized by Gulp with [imagemin](https://github.com/imagemin/imagemin), and placed into `dist/img`.

You can then use these images in your template files by any means that you may need (with standard html `img` tag, by CSS, JavaScript, etc.).


::: warning
Please note that images placed directly inside your theme folder should be considered as "static" resources, and thus only used in places where you don't expect the final user to be able to modify them (i.e. default fallbacks and general "theme images" ); any image that you want to dynamically load and that can be considered real content, should be uploaded into WordPress "Media" manager and attached to your pages/articles the standard way.
:::

