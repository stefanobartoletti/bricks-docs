---
title: Images
lang: en-US
description: 'How Bricks manages images'
---

# {{ $frontmatter.title }}

Bricks comes with a custom Gulp task that helps you optimize images. The source folder where you should place these images is `src/img`.

Supported formats are `*.jpg`, `*.png`, `*.gif` and `*.svg`. They will be optimized by Gulp with [imagemin](https://github.com/imagemin/imagemin), and placed into `dist/img`.

You can then use these images in your template files in any way that you may need. In example, to use a custom image in a `<img>` tag, you can simply reference it like this:

```php
<?php $my_image = get_template_directory_uri().'/dist/img/my-image.png'; ?>

<img src="<?php echo $my_image; ?>" alt="My Image">
```


::: warning
Please note that images placed directly inside your theme folder should be considered as static resources, and thus only used when you don't expect the final user to be able to modify them (i.e. theme-related images as opposed to real dynamic content, such as fallback or default pictures, icons, decorative images, etc. ).

Any image that you want to be loaded dynamically and that can be considered real content, should be uploaded into WordPress "Media" manager and attached to your pages/articles with standard WordPress template tags.
:::

