module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],

  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': ['warn', 'prefer-single'],
    'react/prop-types': 0,
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],

    'no-console': 'warn',
    'react/no-multi-comp': ['warn', { ignoreStateless: true }],
    'react/no-set-state': 'warn',
    'react/no-string-refs': 'warn',
    'react/prefer-es6-class': 'warn',
    // 'react/prefer-stateless-function': 'warn',
    'react/sort-comp': 'warn',
    // JSX
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-curly-spacing': [2, { when: 'never', allowMultiline: true }],
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-handler-names': 'warn',
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-indent': ['warn', 2],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['warn', { maximum: 6 }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-pascal-case': 'warn',
    'no-unused-vars': 'warn',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
};
