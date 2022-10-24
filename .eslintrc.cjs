/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const { NODE_ENV = 'development' } = process.env || {}

const isProductionRule = NODE_ENV === 'production' ? 'error' : 'warn'

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'brace-style': [isProductionRule, '1tbs'],
    'comma-dangle': [isProductionRule, 'never'],
    curly: 'error',
    'no-console': isProductionRule,
    'no-debugger': isProductionRule,
    'no-unused-vars': [isProductionRule, { args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    quotes: [isProductionRule, 'single', { allowTemplateLiterals: true }],

    // Vue specific ruleset
    'vue/no-unused-vars': [isProductionRule, { ignorePattern: '^_' }],
    'vue/order-in-components': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/component-api-style': ['error', ['options']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: true }]
  }
}
