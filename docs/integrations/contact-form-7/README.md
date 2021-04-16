---
title: Contact Form 7
lang: en-US
description: 'Bricks WordPress starter theme Contact Form 7 integration'
---

# {{ $frontmatter.title }}

Bricks has an optional integration with the popular WordPress plugin Contact Form 7, whose functions can be accessd from `functions/integrations/cf7.php`.

This integration is disabled by default, and can be enabled from `functions.php` by decommenting the following line:

```php
require_once get_template_directory() . '/functions/integrations/cf7.php';
```

## Functions

### `brk_cf7_styles_scripts()`

This function is used to disable Contact Form 7 CSS and JavaScript from the site Front-End, and to re-enable them only in selected pages. This can help to improve pages speed, since by default Contact Form 7 load them everywhere, even in pages that don't include a form.

To enable CSS and JavaScript on selected pages, use a series of [Conditional Tags](https://codex.wordpress.org/Conditional_Tags) as a value for `$has_cf7_form` variable, which is then used as a conditon to enable these assets. The default value of 

```php
$has_cf7_form = is_front_page() || is_page( array( 'contacts' ));
```

enables Contact Form 7 on the Homepage and in a page whose slug is `contacts`. 

::: tip
If you don't use Contact Form 7, or if you want to enable it everywhere on your website, you can simply leave the inclusion of the partial `functions/integrations/cf7.php` commented inside `functions.php`.
:::