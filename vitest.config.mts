import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    poolOptions: {
      forks: {
        execArgv: ['--expose-gc', '-no-compilation-cache'],
      },
    },
    setupFiles: ['./test/setup-msw.ts'],
  },
  plugins: [
    // This is required to build the test files with SWC
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
      module: { type: 'es6' },
    }),
  ],
});
