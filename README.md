# ysh-base-template

一个基于 Vue 3 + Vite 的前端项目模板，集成了常用的开发配置和工具。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 下一代的前端构建工具
- Vue Router - Vue.js 的官方路由
- Pinia - Vue 的状态管理库
- Element Plus - 基于 Vue 3 的组件库
- Axios - 基于 promise 的 HTTP 客户端
- ESLint - JavaScript 代码检查工具
- Prettier - 代码格式化工具

## 特性

- 💡 Vue 3 Composition API
- ⚡️ Vite 构建，快速的冷启动和热更新
- 🎨 Element Plus UI 框架集成
- 📦 组件自动导入
- 🔍 ESLint + Prettier 代码规范
- 🌐 Axios 封装和接口管理
- 📄 多环境配置

## 快速开始

```bash
# 克隆项目
git clone [项目地址]

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码格式化
npm run format

# 代码检查
npm run lint
```

## 项目结构

```
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口管理
│   ├── assets/            # 项目资源文件
│   ├── components/        # 公共组件
│   ├── composables/       # 组合式函数
│   ├── config/            # 配置文件
│   ├── layout/            # 布局组件
│   ├── router/            # 路由配置
│   ├── store/             # Pinia 状态管理
│   ├── styles/            # 全局样式
│   ├── utils/             # 工具函数
│   ├── views/             # 页面视图
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── .env                   # 环境变量
├── .eslintrc.js          # ESLint 配置
├── .prettierrc           # Prettier 配置
├── index.html            # HTML 模板
├── package.json          # 项目依赖
└── vite.config.js        # Vite 配置
```

## 开发指南

### 编码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 Vue 3 组合式 API 的最佳实践

### 组件开发

- 组件放置在 `src/components` 目录下
- 页面组件放置在 `src/views` 目录下
- 使用 `<script setup>` 语法糖编写组件

### 状态管理

- 使用 Pinia 进行状态管理
- Store 文件放置在 `src/store` 目录下

### 样式指南

- 使用 SCSS 预处理器
- 全局样式放置在 `src/styles` 目录下
- 组件样式使用 scoped 属性隔离

## 环境变量

- `.env` - 所有环境通用配置
- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置

## 部署

```bash
# 构建生产环境代码
npm run build

# 构建完成后将 dist 目录下的文件部署到服务器
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

## 许可证

本项目使用修改版的 MIT 许可证。在使用本项目时，需要满足以下条件：

1. 保留原始许可证和版权信息
2. 在以下场景中注明原作者 "CoderYsh"：
   - 源代码文档或 README 中
   - 使用此模板构建的应用程序的用户界面中
   - 任何引用本项目的文档或营销材料中

详细信息请查看 [LICENSE](LICENSE) 文件。
