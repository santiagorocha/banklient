module.exports = {
    'rules': {
        // Color
        'color-hex-length': 'short',
        'color-no-invalid-hex': true,

        // Font
        'font-family-name-quotes': 'always-where-recommended',

        // Function
        'function-calc-no-unspaced-operator': true,
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-space-inside': 'never',
        'function-url-data-uris': 'never',
        'function-whitespace-after': 'always',

        // Number
        'number-leading-zero': 'never',

        // String
        'string-no-newline': true,
        'string-quotes': 'single',

        // Length
        'length-zero-no-unit': true,

        // Time
        'time-no-imperceptible': true,

        // Unit
        'unit-blacklist': ['pt'],
        'unit-case': 'lower',
        'unit-no-unknown': 'true',

        // Value
        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,
        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',

        // Property
        'shorthand-property-no-redundant-values': true,
        'property-case': 'lower',
        'property-no-unknown': [true, {
            'severity': 'warning'
        }],
        'property-no-vendor-prefix': true,

        // Declaration
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'declaration-empty-line-before': 'never',

        // Declaration block
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-ignored-properties': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-space-before': 'never',

        // Block
        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-no-empty': true,
        'block-no-single-line': true,
        'block-opening-brace-newline-after': 'always',

        // Selector
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        // 'selector-class-pattern': [], // TODO: pattern for class selectors according BEM naming
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        // 'selector-id-pattern': '', TODO: pattern for camelCase ids
        'selector-max-compound-selectors': 3,
        'selector-no-empty': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'selector-max-empty-lines': 0,

        // Selector list
        'selector-list-comma-newline-after': 'always',

        // Rule
        'rule-nested-empty-line-before': ['always', {
            'except': ['first-nested'],
            'ignore': ['after-comment']
        }],
        'rule-non-nested-empty-line-before': ['always', {
            'except': ['after-single-line-comment']
        }],

        // Media feature
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-no-missing-punctuation': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        // At-rule
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-no-unknown': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',

        // Comment
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',

        // General / Sheet
        'indentation': 4,
        'max-empty-lines': 2,
        'max-nesting-depth': 4,
        'no-duplicate-selectors': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-unknown-animations': true
    }
};