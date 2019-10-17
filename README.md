# Intro

[Slides](why-tests.md)

## Theory

If you already started to learn JS, you know JS (JavaScript) is code that run in a web browser from a webpage. To write **unit tests** in JS you probably want something different. These should not be in browser. If so, they probably doing _user input validation_ (not unit test).

To run tests in JS you need a **test runner**. This is a small program that automatically detects any tests you created and runs them. The results are presented to you as a developer only, either in a terminal, or as a simple webpage.

When running tests in a terminal, you need a Javascript engine suitable for it. In most cases this is NodeJS, which you need to install just like you install Java, Python or any programming language you want to code in.

## Project Setup

### Codesandbox

Codesandbox is an cloud-based developer environment where you can code frontend, backend or fullstack without downloading anything.

#### Getting started

Use sandbox link provided in each tutorial, then:

1. Fork sandbox using the top right button. ![](img/codesandbox-fork.png) _This requires that you sign up with your Github account and Google account_.
2. Wait for startup animation to finish.
3. Navigate to Server Control Panel ![](img/codesandbox-server-controls.png).
4. Click `🧪 yarn test` to start the test-runner.
5. Resize the terminal panel if needed.

### Local installation

A. An empty project is created, like with any NodeJS project, in the console. It requires [Node/NPM](https://nodejs.org/en/download/) installed. Verify your installation with terminal commands `node -v` and `nvm -v`, then enter:

```bash
  mkdir my-nodejs-tests
```

```bash
  cd my-nodejs-tests
```

```bash
  npm init
```

In order to run tests, an extra npm package is needed. We will use [Jest](https://jestjs.io/), a popular one, also used in ReactJS, Angular, Typescript. Add the package like so:

```bash
  npm install --save-dev jest
```
