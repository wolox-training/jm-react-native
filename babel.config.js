module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@config': './src/config',
          '@constants': './src/constants',
          '@propTypes': './src/propTypes',
          '@redux': './src/redux',
          '@scss': './src/scss',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
