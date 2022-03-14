const crash = async () => { throw new Error('Forced Error!') }
module.exports = async (..._) => { return await crash() }
