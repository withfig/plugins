module.exports = {
  extends: ["@fig/eslint-config-fig"],
  ignorePatterns: [
    "/node_modules/**",
    "/dist/**",
    "/util/**",
    "index.d.ts",
    "compile.ts",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "max-len": "off",
    "no-template-curly-in-string": "off",
    "comma-dangle": "off",
  },
};
