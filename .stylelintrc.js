module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    '@-ysh-/stylelint-config-rational-order',
    'stylelint-config-html',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
  ],
  overrides: [{
    customSyntax: 'postcss-scss',
    files: ['src/**/*.scss']
  },
  {
    customSyntax: 'postcss-html',
    files: ['src/**/*.vue',]
  }],
  plugins: [
    'stylelint-order',
    '@-ysh-/stylelint-config-rational-order/plugin',
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'color-function-notation': null,
    'value-no-vendor-prefix': null,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        ignore: ['rem'],
      },
    ],
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep', 'v-deep']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin'
        ]
      }
    ],
    'no-empty-source': null,
    'string-quotes': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }]
  }
};
