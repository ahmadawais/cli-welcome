// TODO: Auto review with command-code for open source pkgs. Very much WIP.
(async () => {
	process.argv = [
		process.argv[0],
		require.resolve('command-code'),
		'-p',
		'/review changes and rate the changes 1-5, no exploring',
		'--yolo',
		'--verbose'
	];

	try {
		await import('command-code');
	} catch (err) {
		// cmd exited non-zero, that's fine
	}
})();
