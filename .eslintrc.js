module.exports = {
  extends: ['wolox-react-native'],
  rules: {
    complexity: 'off',
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off',
    'comma-dangle': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native']
      }
    ]
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@app': './src/app',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@config': './src/config',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    }
  }
};
