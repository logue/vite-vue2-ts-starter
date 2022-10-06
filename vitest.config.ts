import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue2';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // plugins
  plugins: [
    {
      name: 'vitest-plugin-beforeall',
      config: () => ({
        test: {
          setupFiles: [
            fileURLToPath(new URL('./vitest/beforeAll.ts', import.meta.url)),
          ],
        },
      }),
    } as any,
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    vue(),
  ],
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    globals: true,
    globalSetup: [fileURLToPath(new URL('./vitest/setup.ts', import.meta.url))],
    environment: 'jsdom',
  },
});
