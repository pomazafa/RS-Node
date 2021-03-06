const fs = require("fs");

module.exports = (params) => {
  let input;
  let output;

  if (params.input) {
    try {
      fs.accessSync(params.input, fs.constants.R_OK);
      input = fs.createReadStream(params.input);
    } catch (err) {
      console.error("Error: Input file is not readable or does not exist");
      process.exit(9);
    }
  }

  if (params.output) {
    try {
      fs.accessSync(params.output, fs.constants.W_OK);
      output = params.output;
    } catch (err) {
      console.error("Error: Output file is not writable or does not exist");
      process.exit(9);
    }
  }

  return {
    input,
    output,
  };
};