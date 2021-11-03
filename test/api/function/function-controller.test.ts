import { v4 as uuid } from 'uuid';
import { Function } from '../../../src/api/function';
import request from '../../server/startup.test';

describe('Function endpoints', () => {

    let createdFunction: Function

    it('should return status code 400', async () => {
        const res = await request.post('/api/function')
            .send({});
        expect(res.statusCode).toEqual(400);
    });

    it('should return status code 400 invalid object', async () => {
        const res = await request.post('/api/function')
            .send({
                "name": 1
            });
        expect(res.statusCode).toEqual(400);
    });

    it('should create a new function', async () => {
        var uid: string = uuid()
        const res = await request.post('/api/function')
            .send({
                "name": uid
            });
        expect(res.statusCode).toEqual(201);
        createdFunction = res.body
        expect(createdFunction).toHaveProperty('_id');
    });

    it('should fetch a single function', async () => {
        const res = await request.get(`/api/function/${createdFunction._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
    });

    it('should fetch all functions', async () => {
        const res = await request.get('/api/function');
        expect(res.statusCode).toEqual(200);
    });

    it('should update a function return status code 404', async () => {
        var uid: string = uuid()
        const res = await request.patch(`/api/function/404`)
            .send({
                "name": `${uid}-update`
            });
        expect(res.statusCode).toEqual(404);
    });

    it('should update a function', async () => {
        const resUpdate = await request.patch(`/api/function/${createdFunction._id}`)
            .send({
                "name": `${createdFunction.name}-update`
            });
        expect(resUpdate.statusCode).toEqual(200);
        expect(resUpdate.body).toHaveProperty('_id');
        expect(resUpdate.body._id).toEqual(createdFunction._id)
    });

    it('should delete a function', async () => {
        const resDel = await request.delete(`/api/function/${createdFunction._id}`);
        expect(resDel.statusCode).toEqual(204);

        const resGet = await request.get(`/api/function/${createdFunction._id}`);
        expect(resGet.statusCode).toEqual(404);
    });

    it('should be return status code 404 delete a function', async () => {
        const resDel = await request.delete(`/api/function/404`);
        expect(resDel.statusCode).toEqual(404);
    });

})