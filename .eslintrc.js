module.exports = {
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    globalReturn: true,
  },
  env: {
    browser: true,
  },
  rules: {
    strict: ['error', 'never'],
    'spaced-comment': ['error', 'always', {
      exceptions: ['/'],
    }],
    'max-len': ['error', {
      code: 120,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'no-param-reassign': 'off',
    'no-use-before-define': ['error', {
      functions: false,
    }],
    'no-plusplus': 'off',
    'no-restricted-syntax': [ // allows for-in
      'error',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
  },
};
