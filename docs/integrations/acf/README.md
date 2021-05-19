---
title: Advanced Custom Fields
lang: en-US
description: 'Bricks WordPress starter theme Advanced Custom Fields integration'
---

# {{ $frontmatter.title }}

Bricks has an integration with the popular WordPress plugin Advanced Custom Fields, that is defined from `functions/integrations/acf.php`.

If not needed, this integration can be disabled by commenting the following line inside `functions.php`:

```php
require_once get_template_directory() . '/functions/integrations/acf.php';
```

::: warning
Using ACF is not mandatory but strongly recommended, because Bricks takes advantage of some of its features.
:::

## Local JSON

An `acf-json` folder in the root folder of the theme enables ACF's [Local JSON](https://www.advancedcustomfields.com/resources/local-json/). The simple presence of this folder is sufficient to enable this feature, if you don't need it you can simply delete this folder.

## Functions

The integration with ACF creates an [Options page](https://www.advancedcustomfields.com/resources/options-page/) inside your WordPress admin area, used to create custom fields not related to a single post or page.

::: warning
Please note that the Options page feature is supported only by the PRO version of ACF.
:::

Some custom fields, [registered directly from the php file](https://www.advancedcustomfields.com/resources/register-fields-via-php/), are already present.

These fields are used to define:

- Contact info, which are then displayed in the site footer.
- Social profiles, which are displayed on the site as icons.
- Some meta tags (at the moment, only a custom theme color for Chrome for Android).