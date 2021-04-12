---
title: Bootstrap
lang: en-US
description: 'Bricks WordPress starter theme Bootstrap integration'
---

# {{ $frontmatter.title }}

Bricks comes with a built-in integration with Bootstrap 4, which is included as a NPM package and is compiled from its source files. 

The template files arelady include components and classes from this framework, maing it easy to quickly start a new project.

## CSS


## JavaScript

Bootstrap's JavaScript is not included from the base package, but from [Bootstrap Native](https://thednp.github.io/bootstrap.native/) instead, which doesn't have jQuery as a dependency.

The bundle is loaded from `bsnative.js`, lwhich includes both Bootstrap Native and its required dependency Popper.js.

`bsnative.js` is located in `src/js`, it will be put in `dist/js` once compiled, and is enqueued from `functions/enqueues.php`, as detailed on [JavaScript](/theme/javascript/#enqueues/) page of this documentation.