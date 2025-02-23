// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  useTabs: false,
  printWidth: 120,
  jsxSingleQuote: true,

  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
