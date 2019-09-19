module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // 'react-app',
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',

    'no-debugger': 'warn',
    'spaced-comment': ['error', 'always', { markers: ['/ <reference'] }],
    camelcase: 'error',
    'no-param-reassign': ['error', { props: false }],

    /**
     * TypeScript
     */
    '@typescript-eslint/no-explicit-any': 0,
    // '@typescript-eslint/indent': ['error', 2],
    // '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',

    /**
     * React
     */
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // 'react/prop-types': 'off',

    // React-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
