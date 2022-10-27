/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const { NODE_ENV = 'development' } = process.env || {}

const productionRule = NODE_ENV === 'production' ? 'error' : 'warn'

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
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-unused-vars': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'brace-style': [productionRule, '1tbs'],
    'comma-dangle': [productionRule, 'never'],
    curly: 'error',
    'no-console': productionRule,
    'no-debugger': productionRule,
    'no-unused-vars': [productionRule, { args: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    quotes: [productionRule, 'single', { allowTemplateLiterals: true }],

    // Vue specific ruleset
    'vue/no-unused-vars': [productionRule, { ignorePattern: '^_' }],
    'vue/order-in-components': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/component-api-style': ['error', ['options']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: true }],
    'vue/multi-word-component-names': ['error', { ignores: ['Chip', 'Card'] }],
    'vue/no-unused-components': [productionRule]
  }
}
