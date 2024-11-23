module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        "commitlint-plugin-for-yshproject": (message, when, jump = true) => {
          // 不需要格式校验
          if (!jump) {
            return [true];
          }
          /**
           * 定义支持的类型标识
           */
          const typeEnum = ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "style", "test"];
          const typesStr = typeEnum.join("|");

          const reg = new RegExp(`^\\[\\d{4}-\\d{2}-\\d{2}\\](${typesStr}):.+$`);

          let formatIsOk = false;
          if (!!message && !!message.header) {
            const header = message.header;
            formatIsOk = reg.test(header);
          }
          if (!formatIsOk) {
            const errorMessage = "GL-HOOK-ERR: 您的提交信息不符合规范格式";
            console.info(
              errorMessage +
                "\n" +
                "正确格式为为：" +
                "[YYYY-MM-DD]" +
                "类型标识:commit message" +
                "\n" +
                "您可以使用以下类型标识：" +
                "\n" +
                "\tbuild  ： 影响构建系统或外部依赖关系的更改（示例范围：pom，npm)" +
                "\n" +
                "\tci     ： 更改我们的持续集成文件和脚本" +
                "\n" +
                "\tdocs   ： 仅文档更改" +
                "\n" +
                "\tfeat   ： 一个新功能" +
                "\n" +
                "\tfix    ： 修复错误" +
                "\n" +
                "\tperf   ： 改进性能的代码更改" +
                "\n" +
                "\trefactor ： 代码更改，既不修复错误也不添加功能" +
                "\n" +
                "\tstyle  ： 不影响代码含义的变化（空白，格式化，缺少分号等）" +
                "\n" +
                "\ttest   ： 添加缺失测试或更正现有测试" +
                "\n\n"
            );
            return [false, errorMessage];
          }
          return [true];
        }
      }
    }
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test', 'chore', 'revert']
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};
