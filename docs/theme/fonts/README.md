---
title: Fonts
lang: en-US
description: 'How Bricks WordPress starter theme manages fonts'
---

# {{ $frontmatter.title }}

Bricks comes with some presets to help you configure the typography of your theme, with support for both Google Fonts and locally loaded fonts.

::: tip
The following examples use Bricks default font, Rubik. You should of course modify these presets to suit your own needs.
:::

## Google Fonts

[Google Fonts](https://fonts.google.com/) are loaded from `functions/enqueues.php`:

```php
function brk_styles_scripts() {
    // ...
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
    // ...
}
```

Always on `functions/enqueues.php`, a custom function preloads required Google Fonts resources:


```php
function brk_google_fonts_preconnect() {
    echo '<link rel="preconnect" href="https://fonts.gstatic.com/">'."\n";
}
add_action( 'wp_head', 'brk_google_fonts_preconnect', 7 );
```

If you don't want to use Google Fonts, you can comment out both `wp_enqueue_style()` and `brk_google_fonts_preconnect()` functions.

## Local Fonts

To use locally loaded custom fonts, you should place your font files into `src/fonts`; Gulp will convert and copy them into `dist/fonts` (*otf/ttf* fonts will be converted into *woff2* web format, while *woff/woff2* fonts will be simply copied).

Fonts converted this way must be loaded into your theme with custom `@font-face` rules, which are defined inside `src/sass/_fontface.scss`.

You must also **uncomment** the following line from `src/sass/style.scss` to effectively import these rules into the final css bundle:

```scss
// UNCOMMENT the following line
@import 'fontface';
```

## CSS rule

After you have imported your fonts in one of the two methods described above, you can use a standard CSS rule to use them in your theme, in example:

```css
.my-element {
    font-family: 'Rubik', sans-serif;
}
```