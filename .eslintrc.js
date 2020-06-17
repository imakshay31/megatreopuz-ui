module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react", "relay", "@typescript-eslint"],
    rules: {
        "react/display-name": 0,
        "react/prop-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
    },
    ignorePatterns: ["*.js", "*.d.ts"],
};
