import type { OxfmtConfig } from 'oxfmt'

const config: OxfmtConfig = {
  ignorePatterns: ['node_modules/**/*', 'src/routeTree.gen.ts'],
  jsdoc: true,
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  sortImports: true,
  sortTailwindcss: true,
}

export default config
