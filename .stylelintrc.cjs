module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'scss/dollar-variable-empty-line-before': null,
    'scss/no-global-function-names': null,
  },
};
