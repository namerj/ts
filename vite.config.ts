import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages'; // 自动生成路由
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        { dir: 'src/views', baseRoute: '' }
      ],
      importMode: 'async',
      extendRoute(route, parent) {
        if (route.path === '/admin') {
          return {
            ...route,
            path: '/'
          }
        }
        return {
          ...route,
          meta: { auth: true },
        }
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
