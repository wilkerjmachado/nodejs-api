import { v4 as uuid } from 'uuid';
import { Tag } from '../../../src/api/tag';
import request from '../../server/startup.test';

describe('Tag endpoints', () => {

    let createdTag: Tag

    it('should return status code 400', async () => {
        const res = await request.post('/api/tag')
            .send({});
        expect(res.statusCode).toEqual(400);
    });

    it('should return status code 400 invalid object', async () => {
        const res = await request.post('/api/tag')
            .send({
                "name": 1
            });
        expect(res.statusCode).toEqual(400);
    });

    it('should create a new tag', async () => {
        var uid: string = uuid()
        const res = await request.post('/api/tag')
            .send({
                "name": uid
            });
        expect(res.statusCode).toEqual(201);
        createdTag = res.body
        expect(createdTag).toHaveProperty('_id');
    });

    it('should fetch a single tag', async () => {
        const res = await request.get(`/api/tag/${createdTag._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
    });

    it('should fetch all tags', async () => {
        const res = await request.get('/api/tag');
        expect(res.statusCode).toEqual(200);
    });

    it('should be return status code 404 update a tag', async () => {
        var uid: string = uuid()
        const res = await request.patch(`/api/tag/404`)
            .send({
                "name": `${uid}-update`
            });
        expect(res.statusCode).toEqual(404);
    });

    it('should update a tag', async () => {
        const resUpdate = await request.patch(`/api/tag/${createdTag._id}`)
            .send({
                "name": `${createdTag.name}-update`
            });
        expect(resUpdate.statusCode).toEqual(200);
        expect(resUpdate.body).toHaveProperty('_id');
        expect(resUpdate.body._id).toEqual(createdTag._id)
    });

    it('should delete a tag', async () => {
        const resDel = await request.delete(`/api/tag/${createdTag._id}`);
        expect(resDel.statusCode).toEqual(204);

        const resGet = await request.get(`/api/tag/${createdTag._id}`);
        expect(resGet.statusCode).toEqual(404);
    });

    it('should be return status code 404 delete a tag', async () => {
        const resDel = await request.delete(`/api/tag/404`);
        expect(resDel.statusCode).toEqual(404);
    });

})