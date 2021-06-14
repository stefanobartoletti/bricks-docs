---
title: Animate on Scroll
lang: en-US
description: 'Bricks WordPress starter theme Animate on Scroll integration'
---

# {{ $frontmatter.title }}

Bricks has a builtin optional integration with [Animate on Scroll](https://michalsnik.github.io/aos/).

::: warning
The latest version tested with Bricks is `2.3.4`
:::

## Installation

AOS is disabled by default, and can be enabled if needed by following these steps:

-   Install the NPM package:

      <code-group>

      <code-block title="Yarn" active> 
      ```bash
      yarn add aos
      ```
      </code-block>

      <code-block title="npm"> 
      ```bash
      npm install aos
      ```
      </code-block>

      </code-group>

-   Uncomment the following line from `src/js/scripts.js`:

    ```javascript
    import "./integrations/aos"
    ```

-   Uncomment the following line from `src/sass/style.scss`:

    ```scss
    @import 'integrations/aos';
    ```

## Integration

Once you have installed and enabled the library, you can use [AOS documentation](https://michalsnik.github.io/aos/) as a reference to use it in your project, since Bricks integrates it without modifications to its core functionality.

-   JavaScript is included from `src/js/integrations/aos.js`, that imports the sources from `node_modules` and initializes the script, with some default settings that you can customize to your liking.
-   CSS is loaded from `src/sass/integrations/_aos.scss`, that takes the sources from `node_modules` too, and also includes a default preset for a custom animation. This preset can be used as a base for further customizations or entirely deleted if you don't need it.
