module.exports =  {
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'airbnb',
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
            jsx:  true,  // Allows for the parsing of JSX
        },
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
        'import/prefer-default-export': 0,
        'graphql/template-strings': ['error', {
            env: 'literal',
            schemaJson: require('./schema'),
        }]
    },
    settings:  {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        node: true
    },
    plugins: [
      'graphql'
    ]
};
