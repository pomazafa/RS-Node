const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

const params = {
    shift: args.shift || args.s,
    input: args.input || args.i,
    output: args.output || args.o,
    action: args.action || args.a
}

const validationResult = require('./validateArgs')(params);

if (!validationResult) {
    console.error('Parameter "action" should be "encode" or "decode"')
    process.exit(9);
}

module.exports = params;