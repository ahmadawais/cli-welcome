const welcome = require('./index.js');

// Use it.
welcome({
	title: `Welcome CLI`,
	tagLine: `by Awais.dev`,
	description: `Create a welcome message for your CLI.`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});

console.log(`\n\n\n\n\n`);
