const app = require('../../app')
const request = require('supertest')

describe('app integration test', () => {
    it('test GET / success', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Esta é uma aplicação para testes de deploy. - v12')
    })
})