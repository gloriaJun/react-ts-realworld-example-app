module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    // 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
      // 'babel-module': {},
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // },
    },
  },
  rules: {
    // defined the common lint rules
    /**
     * basic rules
     */
    'prettier/prettier': 'error',
    // https://eslint.org/docs/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error'],

    /**
     * typescript
     */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-use-before-define': 'warn',

    /**
     * import
     */
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
        // alphabetize: {
        //   caseInsensitive: true,
        //   order: 'asc',
        // },
      },
    ],
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/newline-after-import': 'error',
    // 'import/no-extraneous-dependencies': ['error'],
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    // 'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    // 'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'error',
    'import/no-internal-modules': [
      'error',
      {
        allow: ['src/*'],
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        // devDependencies: ["*.js", "src/**/*.test.js"],
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    /** story files */
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/exports-last': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
    // {
    //   files: ['**/*.spec.js', '**/*.spec.ts', '**/.test.js', '**/.test.ts'],
    //   env: {
    //     jest: true,
    //     'cypress/globals': true,
    //   },
    //   extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
    //   plugins: ['jest', 'cypress'],
    //   rules: {
    //     '@typescript-eslint/no-unsafe-member-access': 'off',
    //     '@typescript-eslint/no-unsafe-assignment': 'off',
    //   },
    // },
  ],
};
