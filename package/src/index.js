import chalk from "chalk";

import {TodoMap} from "./TodoMap";

function test() {
	process.stdout.write(`Testing TodoMap with ES_VER=${ES_VER}...`);
	try {
		const todos = TodoMap.create();
		process.stdout.write(chalk.green`OK`+`\n`);
	} catch (e) {
		process.stderr.write(`\n`+chalk.red(e.stack)+`\n`);
	}
}

test();
