module.exports= {
	env: {
		node: true,
		"jest": true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		"prettier",
	],
	rules: {
		"vue/require-default-prop": 0,
		"vue/multi-word-component-names": 0,
		"vue/no-multiple-template-root": 0,
		"vue/first-attribute-linebreak": 0,
		"vue/no-unused-vars": 2,
		"vue/no-multi-spaces": 2,
		"vue/no-unused-components": 2,
		"vue/no-use-v-if-with-v-for": 2,
		"vue/comma-dangle": 2,
		"vue/comma-spacing": 2,
		"vue/comma-style": 2,
		"vue/no-useless-concat": 2,
		"vue/block-tag-newline": 2,
		"vue/component-name-in-template-casing": [2, "kebab-case"],
		"vue/html-comment-content-newline": 2,
		"vue/html-comment-content-spacing": 2,
		"vue/no-multiple-objects-in-class": 2,
		"vue/no-unused-refs": 2,
		"vue/no-useless-v-bind": 2,
		"vue/no-v-text": 2,
		"vue/padding-line-between-blocks": 2,
		"vue/prefer-separate-static-class": 2,
		"vue/script-indent": 2,
		"vue/v-on-function-call": 2,
		"eol-last": 2
	}
}
