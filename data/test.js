// read a line from a tsv file and print it to the console

import * as stream from "stream";
import * as readline from "readline";

function readtsv({ input }) {
	const output = new stream.PassThrough({ objectMode: true });
	const rl = readline.createInterface({ input });
	rl.on('line', (line) => {
		output.write(line);
	});
	rl.on('close', () => {
		output.push(null);
	});
	console.log(output);
}

readtsv('vain.tsv');
