import {Langbase} from 'langbase';
import welcome from './index.js';

// Use it.
welcome({
	title: `Welcome CLI`,
	tagLine: `by Awais.dev`,
	description: `Create a welcome message for your CLI.`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `1.0`
});

// Demo: First shows the welcome header and then an error message or an AI response.
// This shows the welcome header works no matter what.
(async () => {
	try {
		const langbase = new Langbase({
			apiKey: process.env.LANGBASE_API_KEY
		});

		const response = await langbase.pipe.run({
			name: 'ai-agent',
			messages: [
				{
					role: 'user',
					content: 'What is Langbase.com?'
				}
			]
		});

		console.log(response);
	} catch (err) {
		console.log(err);
	}
})();
