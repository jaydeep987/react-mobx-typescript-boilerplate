[![Node version](https://img.shields.io/node/v/react.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](https://travis-ci.com/jaydeep987/react-mobx-typescript-boilerplate.svg?branch=without-router)](https://travis-ci.com/jaydeep987/react-mobx-typescript-boilerplate)

# react-mobx-typescript boilerplate

>Ready to use boilerplate to speed up development of react app from scratch!

Boilerplate in this branch is for multi page component kind of apps. 

If you want to get boilerplate *without react-router*, please checkout branch `without-router`.

# Features
  - Using `Babel7` and `typescript` to use latest `ecma` features
  - `react v16.8.3` included
  - Supports `code-splitting` or `lazy-loading components` by using `React.lazy` and `React.Suspense`
  - Configured with `mobx`, no more bunch of code writing in redux or something
  - Configured `react-router` for routing support
  - *Themed* with beautiful `material-ui`!
  - Included rich [*icon* library](https://materialdesignicons.com/)
  - `Webpack` configuration ready for *production*
  - *i18n* setup
  - *Testing* with `jest` *(this can be improved for snapshot testing)*
  - Included small demo of counter 

**Note:** Test cases are failing after added support for `code-splitting` because `enzyme` does not support `React.lazy` yet. It will be updated as soon as there will be some update from enzyme.

# Getting started

*Clone* [this repo](https://github.com/jaydeep987/react-mobx-typescript-boilerplate.git)

  - `npm install`
  - *Start dev server:* `npm start`
  - *Run tests:* `npm test`
  - *Lint and type check:* `npm run lint`
  - *Build:* `npm run build` (this will lint before build!)

# Contribute

Feel free to contribute if you like it and you think there is scope of improvement.

Fork this repo and make PR!
