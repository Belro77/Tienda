import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import securityPlugin from 'eslint-plugin-security';
import tsParser from '@typescript-eslint/parser';
import htmlParser from '@angular-eslint/template-parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@angular-eslint': angular,
      security: securityPlugin,
    },
    rules: {
      ...angular.configs.recommended.rules,
      '@angular-eslint/prefer-inject': 'off',
      
      'security/detect-unsafe-regex': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
    },
  },
];


