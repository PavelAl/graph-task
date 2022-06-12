module.exports = {
  root: true,
  plugins: ['import', 'prettier', 'react'],
  extends: ['airbnb-typescript/base', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  rules: {
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/indent': 'off',
    'react/jsx-newline': [
      'error',
      {
        prevent: false
      }
    ],
    'import/no-duplicates': 'error',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'sibling',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};
