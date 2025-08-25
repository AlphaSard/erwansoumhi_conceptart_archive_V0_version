module.exports = {
	extends: ["stylelint-config-standard"],
	rules: {
		"import-notation": null,
		"hue-degree-notation": null,
		"lightness-notation": null,
		"rule-empty-line-before": null,
	},
	overrides: [
		{
			files: ["**/*.css"],
			customSyntax: "postcss-scss",
			rules: {
				"at-rule-no-unknown": null,
			},
		},
	],
}
