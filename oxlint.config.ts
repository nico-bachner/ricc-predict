import type { OxlintConfig } from 'oxlint'

const config: OxlintConfig = {
  categories: {
    correctness: 'error',
    nursery: 'off',
    pedantic: 'warn',
    perf: 'warn',
    restriction: 'warn',
    style: 'warn',
    suspicious: 'warn',
  },
  ignorePatterns: ['node_modules/**/*'],
  options: {
    maxWarnings: 10,
  },
  rules: {
    'explicit-function-return-type': 'off',
    'explicit-module-boundary-types': 'off',
    'sort-imports': 'off',
    'text-encoding-identifier-case': [
      'warn',
      {
        withDash: true,
      },
    ],
  },
}

export default config
