import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production'
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: true,
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // 不使用自动导入样式，我们使用自定义主题
            resolveIcons: true,
          }),
        ],
      }),
      isProd && visualizer({
        filename: './stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      isProd && viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
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
        scss: {
          additionalData: `
            @use "@/assets/styles/variables" as *;
            @use "@/assets/styles/mixins" as *;
          `,
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'ant-design-vue': ['ant-design-vue'],
            'lodash-es': ['lodash-es'],
            '@vueuse/core': ['@vueuse/core'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  }
})
