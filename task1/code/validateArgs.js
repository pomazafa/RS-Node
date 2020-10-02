    module.exports = (params) => {
        var result = params.action === 'encode' || params.action === 'decode';
        return result;
    };