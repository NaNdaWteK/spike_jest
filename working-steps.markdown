# Jest TDD

## Start npm project

`npm init`

## Install jest

`npm install jest --save-dev`

## Install babel to use ES6

* `npm install babel-core --save-dev`
* `npm install babel-preset-env --save-dev`

## Configure babel

Create .babelrc file

## For the async folder test

Need to add a npm module to do the calls

`npm install node-fetch --save`

## Run test

In diferent steps the script is diferent for coverage or others, but minimal you need add this to your package.json

```
"scripts": {
    "test": "jest"
},
```

* `npm run test`
* `npm t`

## Run only certain test

It runs if has a word of the test file or all its name

`npm run test github`

## Add Interactive mode of jest

* 1.- Add interactive mode of jest to package.json
* 2.- Update modules: `npm update`
* 3.- Run in interactive mode: `npm run test:watch`

## Add code coverage for jest

* 1.- Add code coverage for jest to package.json
* 2.- Run test with info: `npm run test`
* 3.- Run test with web report: `xdg-open coverage/lcov-report/index.html`
