module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],

  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-imports-ts': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    camelcase: [
      2,
      {
        properties: 'always',
      },
    ],
    'id-length': [
      2,
      {
        min: 4,
        properties: 'never',
        exceptions: ['Log', 'LOG', 'get', 'Get', 'put', 'Joi', 'Rol'],
      },
    ],
    'max-lines': [
      'error',
      {
        max: 300,
      },
    ],
    'max-len': [
      2,
      {
        code: 150,
      },
    ],
    'max-lines-per-function': ['error', 300],
    'max-params': [
      'error',
      {
        max: 3,
      },
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'pragma|ignored',
        ignoreInlineComments: true,
      },
    ],
    'no-var': 2,
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['/'],
      },
    ],
    'no-empty': 2,
    'no-empty-function': 2,
    'no-implicit-globals': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-trailing-spaces': 2,
  },

};
