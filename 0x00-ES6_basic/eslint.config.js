export default {
    env: {
	browser: true,
	es2021: true,
    },
    extends: [
	"eslint:recommended",
	"plugin:node/recommended"
    ],
    parserOptions: {
	ecmaVersion: 12,
	sourceType: "module",
    },
    rules: {
	// Customize your rules here
	"no-console": "warn",
	"no-unused-vars": "warn",
    },
};
