---
title: Localization
lang: en-US
description: 'How Bricks WordPress starter theme manages translations'
---

# {{ $frontmatter.title }}

Bricks uses standard WordPress [localization functions](https://developer.wordpress.org/apis/handbook/internationalization/internationalization-functions/) in its templates, such as `_e()` or `esc_html_e()`, to prevent hardcoded text strings.

The default [text domain](https://developer.wordpress.org/themes/functionality/internationalization/#text-domain) is named **`bricks`**.

Example:

```php
<?php esc_html_e('My translatable text string', 'bricks') ?>
```

Gulp scans template files for all localization functions that use `bricks` as text domain, and updates the `languages/template.pot` file, that you can use as a base for your translations (read more about this subject on [WordPress developer's handbook](https://developer.wordpress.org/apis/handbook/internationalization/localization/)).

To take advantage of this, you should use `bricks` as text domain even for your own translatable strings.

Actual `*.po` and `*.mo` translation files should be placed inside `languages/` folder as well, and can be generated with a tool like [Poedit](https://poedit.net/).

::: tip
Bricks' templates have English text strings by default, and already includes translations for the following languages:

-   Italian

Contributions to add translations for additional languages are kindly welcome, and could be a nice way to help improve this project. If you want to contribute you can open a pull request on the [GitHub repository](https://github.com/stefanobartoletti/bricks).
:::

::: warning
The localization task is included only in `yarn build` script, and not in `yarn dev` or `yarn watch`, to prevent updating `template.pot` too often during active development.
:::
