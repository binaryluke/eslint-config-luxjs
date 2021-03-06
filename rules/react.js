module.exports = {

	plugins: [
		'react',
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	ecmaFeatures: {
		jsx: true,
	},

	rules: {
		'jsx-quotes': ['error', 'prefer-double'],
		// TODO: prefer enable
		'class-methods-use-this': ['off', {
			exceptMethods: [
				'render',
				'getInitialState',
				'getDefaultProps',
				'getChildContext',
				'componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'componentDidUpdate',
				'componentWillUnmount',
			],
		}],
		'react/display-name': ['off', { ignoreTranspilerName: false }],
		'react/forbid-prop-types': ['off'],
		// TODO: prefer enable
		'react/jsx-boolean-value': ['off', 'never'],
		'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
		'react/jsx-curly-spacing': ['off', 'never', { allowMultiline: true }],
		'react/jsx-handler-names': ['off', {
			eventHandlerPrefix: 'handle',
			eventHandlerPropPrefix: 'on',
		}],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'off',
		'react/jsx-max-props-per-line': ['off', { maximum: 1, when: 'multiline' }],
		'react/jsx-no-bind': ['error', {
			ignoreRefs: true,
			allowArrowFunctions: true,
			allowBind: false,
		}],
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
		'react/jsx-no-literals': 'off',
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': ['error', {
			allowAllCaps: true,
			ignore: [],
		}],
		'react/sort-prop-types': ['off', {
			ignoreCase: true,
			callbacksLast: false,
			requiredFirst: false,
		}],
		'react/jsx-sort-prop-types': 'off',
		'react/jsx-sort-props': ['off', {
			ignoreCase: true,
			callbacksLast: false,
			shorthandFirst: false,
			shorthandLast: false,
			noSortAlphabetically: false,
		}],
		'react/jsx-uses-react': ['error'],
		'react/jsx-uses-vars': 'error',
		'react/no-danger': 'warn',
		'react/no-deprecated': ['error'],
		'react/no-did-mount-set-state': ['error'],
		'react/no-did-update-set-state': ['error'],
		'react/no-direct-mutation-state': 'off',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': ['error', { ignoreStateless: true }],
		'react/no-set-state': 'off',
		'react/no-string-refs': 'error',
		'react/no-unknown-property': 'error',
		'react/prefer-es6-class': ['error', 'always'],
		'react/prefer-stateless-function': 'error',
		'react/prop-types': ['error', { ignore: [], customValidators: [], skipUndeclared: false }],
		'react/react-in-jsx-scope': 'error',
		'react/require-extension': ['off', { extensions: ['.jsx', '.js'] }],
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		// TODO: prefer enable
		'react/sort-comp': ['off', {
			order: [
				'static-methods',
				'lifecycle',
				'/^on.+$/',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'everything-else',
				'/^render.+$/',
				'render',
			],
		}],
		'react/jsx-wrap-multilines': ['error', {
			declaration: true,
			assignment: true,
			return: true,
		}],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-equals-spacing': ['error', 'never'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-no-target-blank': 'error',
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
		'react/jsx-no-comment-textnodes': 'error',
		'react/no-render-return-value': 'error',
		'react/require-optimization': ['off', { allowDecorators: [] }],
		'react/no-find-dom-node': 'error',
		'react/forbid-component-props': ['off', { forbid: [] }],
		'react/no-danger-with-children': 'error',
		'react/no-unused-prop-types': ['error', {
			customValidators: [
			],
			skipShapeProps: true,
		}],
		'react/style-prop-object': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-children-prop': 'error',
		'react/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
		}],
		// TODO: prefer enable
		'react/no-array-index-key': 'off',
		// TODO: prefer enable
		'react/require-default-props': 'off',
		'react/forbid-elements': ['off', {
			forbid: [
			],
		}],
		'react/forbid-foreign-prop-types': 'off',
		'react/void-dom-elements-no-children': 'off',
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
			},
		},
		'react': {
			pragma: 'React',
			version: '0.14',
		},
	},
};
