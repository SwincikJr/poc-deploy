const requestMock = require('mock-express-request')
const responseMock = require('mock-express-response')
const controller = require('../../../src/controller')

describe('controller unit test', () => {
    it('check message result', () => {
        
        const resMock = new responseMock({
            request: new requestMock({})
        })

        controller({}, resMock)

        expect(resMock.statusCode).toBe(200)
        expect(resMock._getJSON().message).toBe('Esta é uma aplicação para testes de deploy. - v9')
    })
})