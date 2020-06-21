module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true,
    },
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "func-names": "off",
    }
};