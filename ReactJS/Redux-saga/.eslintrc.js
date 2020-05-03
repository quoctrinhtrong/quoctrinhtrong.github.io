module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // add to use eslint-plugin-react
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    // check ; mark
    //semi: 1,
    // check '' mark
    //quotes: [2, 'single'],
    // check proptypes
    'react/prop-types': 1,
    // Check prop per line
    'react/jsx-max-props-per-line': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'class-method-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-expression-per-lin': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': ['error'],
    'no-unused-vars': 1,
    'import/extensions': 0,
    'import/order': 1,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'react/jsx-props-no-spreading': 0,
    //'import/jsx-closing-bracket-location': 1
  },
  // link eslint to prettier
  plugins: ['prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
