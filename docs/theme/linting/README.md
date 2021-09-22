---
title: Linting
lang: en-US
description: 'Bricks WordPress starter theme linting and formatting scripts'
---

# {{ $frontmatter.title }}

Bricks is configured with some linting scripts, used to keep the code clean and nicely formatted.

A general script to run all linters at once is

<code-group>

<code-block title="Yarn" active> 
```bash
yarn lint
```
</code-block>

<code-block title="npm"> 
```bash
npm run lint
```
</code-block>

</code-group>

It runs ESlint, Stylelint and phpcs at once.

::: warning
Please note that in order to run `phpcs` you need to install Composer dependencies, by runnign `composer install`.
:::

Individual scripts for each linter are also available.

## ESLint

JavaScript files are linted with [ESLint](https://eslint.org/), configured with [`eslint-config-standard`](https://github.com/standard/eslint-config-standard) preset.

The configuration is defined in `.eslintrc.js`.

<code-group>

<code-block title="Yarn" active> 
```bash
yarn lint:js
```
</code-block>

<code-block title="npm"> 
```bash
npm run lint:js
```
</code-block>

</code-group>

## Stylelint

CSS and Sass files are linted with [Stylelint](https://stylelint.io/), configured with [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) preset, and [`stylelint-config-recess-order`](https://github.com/stormwarning/stylelint-config-recess-order) to sort properties in a logical and ordered way.

The configuration is defined in `stylelint.config.js`.

<code-group>

<code-block title="Yarn" active> 
```bash
yarn lint:js
```
</code-block>

<code-block title="npm"> 
```bash
npm run lint:js
```
</code-block>

</code-group>

## phpcs

PHP files are linted with [phpcs](https://github.com/squizlabs/PHP_CodeSniffer), configured with [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards) preset.

The configuration is defined in `phpcs.xml.dist`.

<code-group>

<code-block title="Composer" active> 
```bash
composer lint
```
</code-block>

</code-group>

::: warning
Please note that in order to run `phpcs` you need to install Composer dependencies, by runnign `composer install`.
:::
