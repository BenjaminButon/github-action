module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 3,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
  },
}
