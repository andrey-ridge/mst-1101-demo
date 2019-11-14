# Demo

This is minimal setup I found to demonstrate problem I've faced with MobX+es6 and MST https://github.com/mobxjs/mobx-state-tree/issues/1101

## Important details

Note that `webpack.config.js` sets alias for `mobx` package in ES6 mode to `mobx/lib/mobx.es6.js`.

## Running tests

```bash
npm install
npm run build
npm test
```
