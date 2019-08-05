/* CLI WELCOME */
const chalk = require('chalk');
const dim = chalk.dim;
const clearConsole = require('clear-any-console');

/**
 * Welcome.
 *
 * @param String heading Heading text.
 * @param String subHeading Sub heading text.
 * @param Object options Configurable options.
 */
module.exports = (heading = 'ADD A HEADING', subHeading = '', options = {}) => {
	// Options.
	const defaultOptions = { bgColor: '#ffffff', color: '#000000', bold: true, clear: true, version: '' };
	const opts = { ...defaultOptions, ...options };

	// Configure.
	const bg = opts.bold ? chalk.hex(opts.bgColor).inverse.bold : chalk.hex(opts.bgColor).inverse;
	const clr = opts.bold ? chalk.hex(opts.color).bold : chalk.hex(opts.color);
	opts.clear && clearConsole();

	// Do it.
	console.log();
	console.log(`${clr(`${bg(` ${heading} `)}`)} ${opts.version} ${dim(subHeading)}`);
	console.log();
};
