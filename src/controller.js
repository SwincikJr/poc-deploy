module.exports = (req, res) => {
    return res.status(200).json({
        message: `Esta é uma aplicação para testes de deploy. - v10`,
        env: process.env.NODE_ENV
    })
}
