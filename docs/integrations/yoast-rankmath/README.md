---
title: Yoast / RankMath
lang: en-US
description: 'Bricks WordPress starter theme Yoast & RankMath integration'
---

# {{ $frontmatter.title }}

Bricks integrates with two of the most popular WordPress SEO plugins, Yoast and RankMath.

## Breadcrumbs

A custom template tag named `brk_breadcrumbs()` is available to use in your templates, and is defined inside `functions/global.php`.

This template tag acts as a wrapper for Yoast or RankMath breadcrumbs functions: it checks if one of these two plugins is active on the website, then simply displays the breadcrumbs as returned by their functions.

Using `brk_breadcrumbs()` instead of their native functions has two main advantages:

*   it allows to switch from one of these plugins to the other without the need to manually edit your templates, since the conditions are automatically checked form the custom function itself.
*   it add Bootstrap CSS classes to the breadcrumbs, allowing for a visual integration with the rest of the site and for an easier customization with Bootstrap variables.

::: tip
Yoast and RankMath breadcrumbs functions are of course availabe to be used even by themselves, if for some reason you don't need the integration that Bricks provides to you.
:::
