module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    rules: {
        'import/extensions': ['error', 'always', {ts: 'never', 'd.ts': 'never'}],
    }
};
