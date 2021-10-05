module.exports = {
  // "env": {
  //     "browser": true,
  //     "es2021": true
  // },
  // "extends": "eslint:recommended",
  // "parserOptions": {
  //     "ecmaVersion": 12,
  //     "sourceType": "module"
  // },
  extends: "eslint-config-airbnb-base",
  rules: {
    "no-console": 1,
    eqeqeq: 2,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: "module",
  },
  env: {
    browser: true,
  },
  //   globals: {
  //     document: true,
  //     alert: true,
  //   },
};
