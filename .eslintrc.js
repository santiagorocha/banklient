module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'node': true,
        'es6': true,
        'jquery': true
    },
    'globals': {
        'NODE_ENV': true,
        'Modernizr': true,
        'Translator': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [
            'error',
            4
        ],
        'prefer-const': [
            'error'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'parserOptions': {
        'sourceType': 'module'
    }
};