import nextPlugin from '@next/eslint-plugin-next'

// see https://github.com/vercel/next.js/discussions/49337
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
]
