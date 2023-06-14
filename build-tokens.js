const { registerTransforms } = require("@tokens-studio/sd-transforms");
const StyleDictionary = require("style-dictionary");
const { promises } = require("fs");

registerTransforms(StyleDictionary, {
	/* options here if needed */
});

async function run() {
	const $themes = JSON.parse(await promises.readFile("$themes.json"));
	const configs = $themes.map((theme) => ({
		source: Object.entries(theme.selectedTokenSets)
			.filter(([, val]) => val !== "disabled")
			.map(([tokenset]) => `${tokenset}.json`),
		platforms: {
			css: {
				transformGroup: "tokens-studio",
				files: [
					{
						destination: `vars-${theme.name}.css`,
						format: "css/variables",
					},
				],
			},
		},
	}));

	configs.forEach((cfg) => {
		const sd = StyleDictionary.extend(cfg);
		sd.cleanAllPlatforms(); // optionally, cleanup files first..
		sd.buildAllPlatforms();
	});
}

run();
