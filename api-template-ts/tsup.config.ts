import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm'],
  target: 'node22',
  sourcemap: false,
  clean: true,
  splitting: false,
  minify: true,
  bundle: true,
})
