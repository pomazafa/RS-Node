const stream = require('stream');
const util = require('util');
const encode = require('./encode');
const decode = require('./decode');

const Transform = stream.Transform ||
    require('readable-stream').Transform;

function Upper(action, shift, options) {
    this.action = action;
    this.shift = shift;
    if (!(this instanceof Upper)) {
        return new Upper(options);
    }

    Transform.call(this, options);
}
util.inherits(Upper, Transform);

Upper.prototype._transform = function (chunk, enc, cb) {
    let result;
    if (this.action === 'encode') {
        result = encode(chunk, this.shift)
    } else if (this.action === 'decode') {
        result = decode(chunk, this.shift)
    }
    this.push(result);

    cb();
};

module.exports = (action, shift) => {
    const upper = new Upper(action, shift);
    return upper;
}