---
title: Swiper
lang: en-US
description: 'Bricks WordPress starter theme Swiper integration'
---

# {{ $frontmatter.title }}

Bricks has a builtin optional integration with [Swiper](https://swiperjs.com/), a JavaScript slider/carousel which shares the same modular principles as this theme.

::: warning
The latest version tested with Bricks is `6.5.7`
:::

## Installation

Swiper is disabled by default, and can be enabled if needed by following these steps:

-   Install the NPM package:

      <code-group>

      <code-block title="Yarn" active> 
      ```bash
      yarn add swiper
      ```
      </code-block>

      <code-block title="npm"> 
      ```bash
      npm install swiper
      ```
      </code-block>

      </code-group>

-   Uncomment the following line from `src/js/scripts.js`:

    ```javascript
    import "./integrations/swiper"
    ```

-   Uncomment the following line from `src/sass/style.scss`:

    ```scss
    @import 'integrations/swiper';
    ```

## Integration

Once installed, you can use [Swiper documentation](https://swiperjs.com/get-started/) as a reference to use it in your project.

Swiper's modules can be imported and enabled individually. Bricks by default enables two of them, namely `Navigation` and `Pagination`, both to offer a sensible default preset and to give an example on how to use the whole library.

-   JavaScript is included from `src/js/integrations/swiper.js`, that imports the sources from `node_modules` and initializes the script. Some configuration settings are already present, Swiper itself is mounted on elements which have a  `swiper-container` class.

    ::: tip
    Multiple Swiper instances, with different configurations, can be initialized and mounted on different elements.
    :::

-   CSS is loaded from `src/sass/integrations/_swiper_.scss`, importing the sources from `node_modules` as well. The Sass file of the core library and of the Navigation and Pagination modules are loaded by default. If you need to use different modules, you should take care of import their styles if you need them.
