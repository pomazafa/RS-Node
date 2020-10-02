const {
    Readable
} = require('stream');
module.exports = (text) => {
    const s = new Readable();
    s._read = () => {};
    s.push(text);
    s.push(null);
    return s;
}