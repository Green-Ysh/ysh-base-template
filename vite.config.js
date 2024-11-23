import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

/**
 * Vite Configuration
 * Vite 配置
 */
export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production'
  return {
    plugins: [
      vue(),
      // Auto import APIs | 自动导入 API
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: true,
      }),
      // Auto import components | 自动导入组件
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // Don't import styles automatically | 不自动导入样式，使用自定义主题
            resolveIcons: true, // Auto import icons | 自动导入图标
          }),
        ],
      }),
      // Bundle analysis (production only) | 打包分析（仅生产环境）
      isProd && visualizer({
        filename: './stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      // Gzip compression (production only) | Gzip 压缩（仅生产环境）
      isProd && viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    // Path alias configuration | 路径别名配置
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    // CSS preprocessing configuration | CSS 预处理配置
    css: {
      preprocessorOptions: {
        // Less configuration for Ant Design Vue | Ant Design Vue 的 Less 配置
        less: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#910e0e',
            'link-color': '#0d4ded',
            'success-color': '#52c41a',
            'warning-color': '#faad14',
            'error-color': '#f5222d',
            'font-size-base': '14px',
            'heading-color': 'rgba(0, 0, 0, 0.85)',
            'text-color': 'rgba(0, 0, 0, 0.65)',
            'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
            'disabled-color': 'rgba(0, 0, 0, 0.25)',
            'border-radius-base': '4px',
            'border-color-base': '#d9d9d9',
            'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
          },
          additionalData: '@import "@/assets/styles/antdv/theme.less";',
        },
        // SCSS global imports | SCSS 全局导入
        scss: {
          additionalData: `
            @use "@/assets/styles/variables" as *;
            @use "@/assets/styles/mixins" as *;
          `,
        },
      },
    },
    // Build configuration | 构建配置
    build: {
      rollupOptions: {
        output: {
          // Manual chunk splitting | 手动代码分割
          manualChunks: {
            'ant-design-vue': ['ant-design-vue'],
            'lodash-es': ['lodash-es'],
            '@vueuse/core': ['@vueuse/core'],
          },
          // Output file naming | 输出文件命名
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      // Chunk size warning limit | 代码块大小警告限制
      chunkSizeWarningLimit: 1000,
    },
  }
})
