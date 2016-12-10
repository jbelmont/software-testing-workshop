module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-extra-boolean-cast': 'off',
    'no-console': 'warn',
    'no-case-declarations': 'warn',
    'no-cond-assign': 'warn',
    'brace-style': 'error',
    'comma-dangle': 'error'
  }
}
