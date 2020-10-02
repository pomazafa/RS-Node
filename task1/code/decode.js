const encode = require('./encode');

module.exports = (text, shift) => {
    return encode(text, -shift);
}