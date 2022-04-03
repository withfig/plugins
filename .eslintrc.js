module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["/node_modules/**", "/dist/**", "/util/**", "index.d.ts", "compile.ts"],
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-template-curly-in-string": "off",
  },
};
