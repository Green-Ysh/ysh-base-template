/**
 * ESLint Configuration
 * ESLint 配置
 */
module.exports = {
  root: true, // Stop ESLint from looking for config files in parent folders | 阻止 ESLint 在父文件夹中寻找配置文件
  env: {
    browser: true, // Browser global variables | 浏览器全局变量
    node: true, // Node.js global variables | Node.js 全局变量
    es6: true, // Enable ES6 features | 启用 ES6 特性
  },
  parser: 'vue-eslint-parser', // Parser for .vue files | .vue 文件的解析器
  parserOptions: {
    parser: '@typescript-eslint/parser', // Parser for TypeScript | TypeScript 解析器
    ecmaVersion: 2020, // ECMAScript version | ECMAScript 版本
    sourceType: 'module', // Allow use of imports | 允许使用 import
    jsxPragma: 'React', // JSX pragma | JSX 编译指示
    ecmaFeatures: {
      jsx: true, // Enable JSX | 启用 JSX
      tsx: true, // Enable TSX | 启用 TSX
    },
  },
  extends: [
    "./.eslintrc-auto-import.json",
    require.resolve("@-ysh-/code-specification-unid/config/vue3/eslintrc.js"),
    'plugin:vue/vue3-recommended', // Vue 3 recommended rules | Vue 3 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript recommended rules | TypeScript 推荐规则
    'plugin:prettier/recommended', // Prettier recommended rules | Prettier 推荐规则
  ],
  rules: {
    // Vue specific rules | Vue 特定规则
    'vue/script-setup-uses-vars': 'error', // Prevent unused variables in <script setup> | 防止 <script setup> 中的未使用变量

    // TypeScript specific rules | TypeScript 特定规则
    '@typescript-eslint/ban-ts-ignore': 'off', // Allow @ts-ignore | 允许 @ts-ignore
    '@typescript-eslint/explicit-function-return-type': 'off', // Don't require return types | 不要求返回类型
    '@typescript-eslint/no-explicit-any': 'off', // Allow any type | 允许 any 类型
    '@typescript-eslint/no-var-requires': 'off', // Allow require statements | 允许 require 语句
    '@typescript-eslint/no-empty-function': 'off', // Allow empty functions | 允许空函数
    'vue/custom-event-name-casing': 'off', // Allow any event name casing | 允许任意事件名称大小写
    'no-use-before-define': 'off', // Allow use before define | 允许在定义前使用
    '@typescript-eslint/no-use-before-define': 'off', // Allow use before define in TypeScript | 允许在 TypeScript 中在定义前使用
    '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-comments | 允许 @ts-comments
    '@typescript-eslint/ban-types': 'off', // Allow all types | 允许所有类型
    '@typescript-eslint/no-non-null-assertion': 'off', // Allow non-null assertions | 允许非空断言
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Don't require return types for exports | 不要求导出的返回类型

    // Variable usage rules | 变量使用规则
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Ignore args starting with _ | 忽略以 _ 开头的参数
        varsIgnorePattern: '^_', // Ignore vars starting with _ | 忽略以 _ 开头的变量
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // Ignore args starting with _ | 忽略以 _ 开头的参数
        varsIgnorePattern: '^_', // Ignore vars starting with _ | 忽略以 _ 开头的变量
      },
    ],

    // Formatting rules | 格式化规则
    'space-before-function-paren': 'off', // Don't enforce space before function parentheses | 不强制函数括号前的空格
    "vue/multi-word-component-names": "off",
  },
}
