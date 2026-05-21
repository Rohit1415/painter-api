module.exports = {
  env: {
    browser: false,
    node: true,
    es2024: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-undef": "error",
    "prefer-const": "error",
    "arrow-body-style": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
  },
};
