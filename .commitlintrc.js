/**
 * Commitlint Configuration
 * 提交信息规范配置
 */
module.exports = {
  // Extend base configuration | 扩展基础配置
  extends: ["@-ysh-/code-specification-unid/config/vue3/commitlintrc.js"],
  // rules | 规则
  rules: {
    "commitlint-plugin-for-yshproject": [2, "always"],
  },
};
