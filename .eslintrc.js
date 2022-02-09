module.exports = {
  extends: ['@linkup/next-js'],
  overrides: [
    {
      files: ['./src/core/store/*/index.ts'],
      rules: {
        'no-param-reassign': [
          'error',
          { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
      },
    },
  ],
};
