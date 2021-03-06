---
title: Scripts & Tasks
lang: en-US
description: 'Bricks WordPress starter theme development scripts and Gulp tasks'
---

# {{ $frontmatter.title }}

## Scripts

Bricks comes with some predefined scripts, which are handy aliases to pre-configured Gulp serial tasks. **Yarn** is the preferred way to run scripts, but it is also possible to run them with plain **npm**.

### Compile (Development Environment)

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

This script compiles all resources for a development environment (it uses `NODE_ENV=development` value).

### Watcher & Live server

<code-group>

<code-block title="Yarn" active> 
```bash
yarn watch
```
</code-block>

<code-block title="npm"> 
```bash
npm run watch
```
</code-block>

</code-group>

This script starts both [Gulp watcher](https://gulpjs.com/docs/en/getting-started/watching-files/) and [BrowserSync](https://www.browsersync.io/), to automatically compile modified resources on-the-fly and inject them in your browser, during local development (like **dev**, it uses `NODE_ENV=development` value).

::: tip
BrowserSync proxy server can be accessed by default from port `3000`, and its configuration UI from `3001`. When you run `yarn watch`, full URLs will be displayed on the terminal output.
:::

### Compile (Production Environment)

<code-group>

<code-block title="Yarn" active> 
```bash
yarn build
```
</code-block>

<code-block title="npm"> 
```bash
npm run build
```
</code-block>

</code-group>

This script compiles all resources for a production environment (it uses `NODE_ENV=production` value). It performs minification and tree-shaking to reduce the size of the final resource bundles.

### Linting

Linting scripts are detailed on the [Linting](/theme/linting/) page of this documentation

## Tasks

Scripts described above should be sufficient in most cases, but if needed, Gulp is configured to expose individual sub-task that can be run separately, to quickly recompile a single resource type. When running tasks this way `NODE_ENV=development` is used, so resources won't be optimized for production.

Since these sub-tasks are not intended to be regularly used during the development process, they are not defined as scripts within `package.json` and should be run directly with Gulp.

### CSS

```bash
yarn gulp css
```

Compiles source Sass files into final CSS (more details on [CSS](/theme/css/) page).

### JavaScript

```bash
yarn gulp js
```

Compiles source JavaScript files into final bundles (more details on [JavaScript](/theme/javascript/) page).

### Images

```bash
yarn gulp img
```

Optimizes source image files (more details on [Images](/theme/images/) page).

### Fonts

```bash
yarn gulp fonts
```

Convert source font files into optimized web formats (more details on [Fonts](/theme/fonts/) page).

### Icons

```bash
yarn gulp icons
```

Copies source **Font Awesome** JavaScript file into `./dist` folder. Since it will be optimized only for production, running this task individually has no practical use (more details on [Icons](/theme/icons/) page).

### Localization

```bash
yarn gulp i18n
```

Scans PHP files for [localization functions](https://developer.wordpress.org/apis/handbook/internationalization/internationalization-functions/) and writes a `.pot` template file (more details on [Localization](/theme/localization/) page).
