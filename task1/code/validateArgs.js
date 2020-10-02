    module.exports = (params) => {
        const result = {
            action: params.action === 'encode' || params.action === 'decode',
            shift: Number.isInteger(params.shift)
        }
        return result;
    };