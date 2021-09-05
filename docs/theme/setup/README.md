---
title: Setup
lang: en-US
description: 'How to install Bricks WordPress starter theme'
---

# {{ $frontmatter.title }}

## Requirements

-   [Git](https://git-scm.com/) to clone this repository.
-   [Yarn](https://yarnpkg.com/) as the preferred tool to manage dependencies and run development scripts (you can also use plain [npm](https://nodejs.org/)).
-   [Advanced Custom Fields](https://www.advancedcustomfields.com/) (Regular or PRO) to take advantage of its integration with Bricks (Optional but strongly recommended).

## Installation

-   Install Advanced Custom Fields (Regular or Pro version) into your WordPress installation (Optional).

    ::: warning
    Using ACF is not mandatory but strongly recommended, because Bricks takes advantage of some of its features.
    :::

-   Clone Bricks from its [repository](https://github.com/stefanobartoletti/bricks) directly inside the `wp-content/themes` directory in your WordPress installation:

    ```bash
    git clone https://github.com/stefanobartoletti/bricks.git
    ```

-   Delete `.git` and `.github` directories inside the newly created `bricks` theme folder.

-   Run `git init` to initialize a new repository from scratch (you may skip this step, i.e. if you already have a Git repository versioning your entire WordPress installation).

-   Install dependencies with your package manager:

      <code-group>

      <code-block title="Yarn" active> 
      ```bash
      yarn install
      # or simply
      yarn
      ```
      </code-block>

      <code-block title="npm"> 
      ```bash
      npm install
      ```
      </code-block>

      </code-group>

-   Compile all resources:

    <code-group>

    <code-block title="Yarn" active> 
    ```bash
    yarn dev
    ```
    </code-block>

    <code-block title="npm"> 
    ```bash
    npm run dev
    ```
    </code-block>

    </code-group>
