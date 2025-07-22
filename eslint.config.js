import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
        ignores: [".next/**"],
    },
    ...tseslint.configs.recommended,
    {
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@typescript-eslint/no-unused-vars': 'off',
        },
    }
);
