// Auto review with command-code (/review). Runs the downloaded cmd CLI.
import path from 'path';
import {spawnSync} from 'child_process';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const pkgPath = require.resolve('command-code/package.json');
const {bin} = require(pkgPath);
const cmdBin = path.join(path.dirname(pkgPath), typeof bin === 'string' ? bin : bin['command-code']);

spawnSync(
	process.execPath,
	[cmdBin, '-p', '/review changes and rate the changes 1-5, no exploring', '--yolo', '--verbose'],
	{stdio: 'inherit'}
);
