module.exports = {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      process: "readonly",
      console: "readonly",
    },
  },
  plugins: {},
  rules: {
    "no-console": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-undef": "error",
    "prefer-const": "error",
    "arrow-body-style": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
  },
};
