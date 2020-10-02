const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const params = {
    shift: args.shift || args.s,
    input: args.input || args.i,
    output: args.output || args.o,
    action: args.action || args.a
}

const validationResults = require('./validateArgs')(params);

if (!validationResults.action) {
    console.error('Parameter "action" should be "encode" or "decode"')
    process.exit(9);
}

if (!validationResults.shift) {
    console.error('Parameter "shift" is required and should be an integer')
    process.exit(9);
}

module.exports = params;