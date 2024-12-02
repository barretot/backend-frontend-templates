import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm'],
  target: 'node22',
  sourcemap: false, // Sem sourcemaps
  clean: true, // Limpa o diretório de saída antes do build
  splitting: false, // Sem chunks
  minify: true, // Ativa minificação para produção, código em uma única linha
  bundle: true, // Gera um único arquivo de saída
})
