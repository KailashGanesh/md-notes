module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      'jest/globals': true,
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      'plugin:jest/recommended',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "react",
      "react-hooks",
      "jest"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    },
    ignorePatterns: ['*.css', '*.svg'],
  };
  