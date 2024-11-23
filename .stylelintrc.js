/**
 * Stylelint Configuration
 * 样式规范配置
 */
module.exports = {
  extends: [require.resolve("@-ysh-/code-specification-unid/config/vue3/stylelintrc.js")],
  ignoreFiles: ["index.html"],
  rules: {
    "color-function-notation": "modern",
    "selector-class-pattern": "",
    "font-family-no-missing-generic-family-keyword": null,
    "scss/at-mixin-pattern": null,
    "scss/double-slash-comment-whitespace-inside": null,
    "scss/at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "at-rule-empty-line-before": null,
  },
};