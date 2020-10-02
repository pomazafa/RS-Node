const completePipeline = require('./completePipeline')

module.exports = (input, output, action, shift) => {
    completePipeline(input, output, action, shift);
}