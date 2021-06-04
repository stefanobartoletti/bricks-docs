---
title: Cleanup
lang: en-US
description: 'Bricks WordPress starter theme optimization functions'
---

# {{ $frontmatter.title }}

WordPress by default loads a lot of unnecessary stuff on the HTML `<head>` of the site pages, that in most projects are not required at all and can be safely disabled.

Bricks uses various custom functions located inside `functions/cleanup.php` to disable this stuff, in order to have cleaner webpages, improve the site speed and overall performance.

::: warning
Most of the stuff that Bricks disables by default is really not required for most projects, but all of these functions are optional.

Bricks tries to provide a reasonable setup valid for most projects, but if your specific needs require some of these features, you can re-enable them at will.
:::

## Details

### `brk_disable_gutenberg()`

This function disables Gutenberg Block Editor, WordPress internal page builder, and restores the classic editor in all pages.

It also prevents Gutenberg CSS to be loaded on the site's frontend.

To disable this function (and re-enable Gutenberg), comment the following line inside `functions/cleanup.php`:

```php
add_action('init', 'brk_disable_gutenberg');
```

### `brk_disable_emojis()`

This function disables WordPress internal support for emojis, preventing it to load unnecessary scripts and styles.

You don't really need to use emojis in all projects, and modern browsers already provide support to display them, so loading these extra resources is basically never necessary.

To disable this function (and re-enable emoji support from WordPress), comment the following line inside `functions/cleanup.php`:

```php
add_action('init', 'brk_disable_emojis'); 
```

### `brk_disable_oembed()`

WordPress natively supports oEmbed: thie feature makes your public posts and pages embeddable in other websites.

This feature is not typically required in every project, and Bricks disables it by default to prevent loading unnecessary resources.

To disable this function (and re-enable oEmbed support), comment the following line inside `functions/cleanup.php`:

```php
add_action('init', 'brk_disable_oembed');
```

### `brk_disable_query_strings()`

This function is used to remove query strings from static resources, such as, in example, `www.example.com/style.css?ver=4.6.0`.

Depending on your configuration, this can be useful to improve caching performance.

This function is **not** enabled by default (i.e. query strings are added to your resources, according to WordPress defaults). If you need to remove query strings, you should uncomment the following line inside `functions/cleanup.php`:

```php
add_action('init', 'brk_disable_query_strings');
```

### `brk_jquery_footer()`

This function is used to load jQuery from the site footer instead of the head. This can improve the overall perfomance of the site.

This function also prevents jQuery Migrate to be loaded. This script provides legacy code used by outdated themes and plugins, but it is not required in new projects, such as those where Bricks could be used.

To disable this function, comment the following line inside `functions/cleanup.php`:

```php
add_action('wp_enqueue_scripts', 'brk_jquery_footer');
```

### `brk_disable_head_links()`

This function removes some other misc unnecessary links and tags that WordPress places in the `<head>`, in particular:

-   RSD link
-   WLW link
-   XML-RPC link
-   Generator info
-   Recent comments inline style

To disable this function and re-enable these links, comment the following line inside `functions/cleanup.php`:

```php
add_action('init', 'brk_disable_head_links');
```
