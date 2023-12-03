module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['prefer-arrow-functions'],
  rules: {
    'prettier/prettier': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-unused-vars': 'off',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportDefaultDeclaration',
        message: 'Prefer named exports',
      },
    ],
  },
};
