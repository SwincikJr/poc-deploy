const crash = require('../../../src/crash')

describe('crash unit test', () => {
    it('check if crash throws', async () => {
        
        let throws = false
        
        try {
            await crash()
        } catch {
            throws = true
        }

        expect(throws).toBe(true)
    })
})