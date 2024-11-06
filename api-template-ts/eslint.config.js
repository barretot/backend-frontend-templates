import { Linter } from 'eslint';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';

export default /** @type {Linter.Config} */ ({
  files: ['src/**/*.ts'],
  ignores: ['node_modules/**'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
    'import': importPlugin,
  },
  rules: {
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never'], // Apenas esta regra é suficiente para remover os ponto e vírgulas
    // Regras de importação
    'import/order': ['error', {
      'groups': [
        ['builtin', 'external'],  // Módulos embutidos do Node e externos primeiro
        ['internal'],             // Imports internos depois
        ['parent', 'sibling', 'index'] // Parent e siblings no final
      ],
      'newlines-between': 'always', // Linhas em branco entre grupos
      'alphabetize': {
        'order': 'asc', // Ordena alfabeticamente
        'caseInsensitive': true // Ignora maiúsculas/minúsculas na ordenação
      }
    }],
    'import/no-duplicates': 'error', // Não permite imports duplicados
    'import/no-unresolved': 'error', // Gera erro para imports não resolvidos
    'import/newline-after-import': ['error', { 'count': 1 }], // Linha em branco após bloco de import
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Resolve imports usando configurações do TypeScript
    },
  },
});
