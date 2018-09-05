# TypeScript + hifive boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/mpppk/ts-hifive-boilerplate.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/mpppk/ts-hifive-boilerplate.svg?style=svg)](https://circleci.com/gh/mpppk/ts-hifive-boilerplate)
[![codebeat badge](https://codebeat.co/badges/dee29821-d6e9-434c-9388-c338cba3e0f4)](https://codebeat.co/projects/github-com-mpppk-ts-hifive-boilerplate-master)
[![codecov](https://codecov.io/gh/mpppk/ts-hifive-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/mpppk/ts-hifive-boilerplate)

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

![](imgs/webpack-dev-server.png)

#### Ref

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Testing

```Shell
$ npm test
```

`npm test` execute the test of `__tests__/**/*.ts` and output the coverage.

![](imgs/test_and_coverage.png)

#### Ref

- [jest](https://jestjs.io)

### Linting

```Shell
$ npm run lint
```

`npm run lint` execute linting.

![](imgs/tslint.png)

#### Ref

- [tslint](https://palantir.github.io/tslint/)

### Generate Documentation

```Shell
$ npm run doc
```

`npm run doc` generate documentation to `docs/`.

![](imgs/tsdoc_command.png)

![](imgs/tsdoc.png)

#### Ref

- [typedoc](https://github.com/TypeStrong/typedoc)

## Docker

```Shell
$ docker build -t tshifive .
$ docker run -it -p 8080:8080 tshifive
# Now your application is served on http://localhost:8080
```

## Tools

- editorconfig
- prettier

## SaaS Integration

### Circle CI

![https://codecov.io](imgs/circle_ci.png)

### [CodeCov]()

## GitLab Integration

- GitLab CI & Coverage

![](imgs/gitlab_ci.png)
