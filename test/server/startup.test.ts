import supertest from 'supertest';
import server from '../../src/index';
const request = supertest(server);

describe('Start, error handler and swagger', () => {

    it("Test server port =", () => {
        expect(process.env.PORT).toBe("8080")
    })

    it('404 Test not found', async () => {
        const response = await request.get('/api/not-found');
        expect(response.statusCode).toEqual(404);

    })

    it('Swagger test', async () => {
        const response = await request.get('/swagger');
        expect(response.statusCode).toEqual(301);
    })

})

export default request



