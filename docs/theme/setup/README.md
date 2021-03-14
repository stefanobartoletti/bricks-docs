---
title: Setup
lang: en-US
description: 'How to setup Bricks and start developing your theme'
---

# {{ $frontmatter.title }}

## Requirements

- [Git](https://git-scm.com/) to clone this repository.
- [Yarn](https://yarnpkg.com/) as the preferred tool to manage dependencies and run development scripts (you can also use plain [npm](https://nodejs.org/)).
- [Gulp-cli](https://github.com/gulpjs/gulp-cli) installed globally to run individual sub-tasks (Optional).

## Installation

- Clone Bricks from its [repository](https://github.com/stefanobartoletti/bricks) directly inside the `wp-content/themes` directory in your WordPress installation:

    ```bash
    git clone https://github.com/stefanobartoletti/bricks.git
    ```

- Delete `.git` directory inside the newly created `bricks` theme folder and initialize a new repository from scratch (Optional).

- Install dependencies with your package manager (the install script will also perform the initial setup):

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