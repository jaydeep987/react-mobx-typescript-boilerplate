module.exports = {
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    globalReturn: true,
    project: 'tsconfig.json',
  },
  plugins: [
    '@typescript-eslint/tslint'
  ],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    strict: ['error', 'never'],
    'spaced-comment': ['error', 'always', {
      exceptions: ['/'],
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'max-len': ['error', {
      code: 120,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'import/prefer-default-export': false,
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
    '@typescript-eslint/tslint/config': [1, {
      lintFile: './tslint.json',
    }],
  },
};
