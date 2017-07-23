# TypeScript + hifive boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/mpppk/ts-hifive-boilerplate.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/mpppk/ts-hifive-boilerplate.svg?style=svg)](https://circleci.com/gh/mpppk/ts-hifive-boilerplate)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d61a377f52014846a97181b151cc5e6a)](https://www.codacy.com/app/niboshiporipori/ts-hifive-boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mpppk/ts-hifive-boilerplate&amp;utm_campaign=Badge_Grade)

### GitLab Badges

[![build status](https://gitlab.com/mpppk/ts-hifive-boilerplate/badges/master/build.svg)](https://gitlab.com/mpppk/ts-hifive-boilerplate/commits/master)
[![coverage report](https://gitlab.com/mpppk/ts-hifive-boilerplate/badges/master/coverage.svg)](https://gitlab.com/mpppk/ts-hifive-boilerplate/commits/master)

## Installation

```Shell
$ git clone https://github.com/mpppk/ts-hifive-boilerplate.git
$ npm install
```

## Usage
### Start server for development

```Shell
$ npm start
```

`npm start` serve your application on `http://localhost:8080` and updates the browser on changes.    

#### Ref
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)  

### Testing

```Shell
$ npm test
```

`npm test` execute the test of `test/**/*.ts` and output the coverage.

#### Ref
* [mocha](https://mochajs.org)
* [nyc](https://github.com/istanbuljs/nyc)
* [power-assert](https://github.com/power-assert-js/power-assert)

### Linting

```Shell
$ npm run lint
```

`npm run lint` execute linting.

#### Ref
* [tslint](https://palantir.github.io/tslint/)

### Generate Documentation

```Shell
$ npm run doc
```

`npm run doc` generate documentation to `docs/`.

#### Ref
* [typedoc](https://github.com/TypeStrong/typedoc)

## Tools
* editorconfig

## SaaS Integration
* Circle CI

## GitLab Integration
* GitLab CI
* coverage
