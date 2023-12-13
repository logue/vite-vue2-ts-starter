import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue2';
import { configDefaults, defineConfig } from 'vitest/config';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // plugins
  plugins: [
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    // @ts-expect-error
    vue(),
  ],
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
  },
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    environment: 'jsdom',
    globals: true,
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
    silent: true,
  },
});
