---
title: Icons
lang: en-US
description: 'How Bricks WordPress starter theme manages icons'
---

# {{ $frontmatter.title }}

## Font Awesome

Bricks integrates with Font Awesome 6, specifically with its [SVG with JavaScript](https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself#using-svgs) version.

Icons can be used in the theme templates by the standard way, by using `<i>` tags:

```html
<i class="fa-solid fa-magnifying-glass"></i>
```

that are replaced with the actual icon, as usual.

The complete JavaScript file contains all the icons and can be quite large in size: Gulp performs a tree shaking by using a plugin called `gulp-fa-minify`, that removes all unused icons from the final bundle.

To effectively use this feature, all used icons should be manually added to a safelist in the `faIconSafelist` setting, located inside `bricks.config.js`. More details about this are available on [the plugin docs](https://github.com/FA-Minify/gulp-fa-minify).

The processed file will be located then at `dist/js/fontawesome.min.js`, and included in the theme from `functions/enqueues.php`:

```php
wp_enqueue_script('fontawesome', get_template_directory_uri() .'/dist/js/fontawesome.min.js', false, $theme_version, true );
```

If you don't need to use Font Awesome icons, you can simply comment out this line.
