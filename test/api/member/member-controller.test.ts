import { v4 as uuid } from 'uuid';
import request from '../../server/startup.test';
import { Member } from '../../../src/api/member';
import { Tag } from '../../../src/api/tag';
import { Function } from '../../../src/api/function';

describe('member endpoints', () => {

    let createdMember: Member
    let createdTag: Tag
    let createdFunction: Function

    beforeAll(async () => {
        var uid: string = uuid()
        const resTag = await request.post('/api/tag')
            .send({
                "name": uid
            });
        createdTag = resTag.body

        var uid: string = uuid()
        const resFunction = await request.post('/api/function')
            .send({
                "name": uid
            });
        createdFunction = resFunction.body
    });

    it('should return status code 400', async () => {
        const res = await request.post('/api/member')
            .send({});
        expect(res.statusCode).toEqual(400);
    });

    it('should return status code 400 invalid object', async () => {
        const res = await request.post('/api/member')
            .send({
                "name": 1
            });
        expect(res.statusCode).toEqual(400);
    });

    it('should create a new member', async () => {
        const res = await request.post('/api/member')
            .send({
                "name": "Member",
                "type": "EMPLOYEE",
                "function": {
                    "_id": createdFunction._id
                },
                "tag": [{
                    "_id": createdTag._id
                }]
            });
        expect(res.statusCode).toEqual(201);
        createdMember = res.body
        expect(createdMember).toHaveProperty('_id');
    });

    it('should fetch a single member', async () => {
        const res = await request.get(`/api/member/${createdMember._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
    });

    it('should fetch members by tag', async () => {
        const res = await request.get(`/api/member/tag/${createdTag._id}`);
        expect(res.statusCode).toEqual(200);
    });

    it('should fetch members by function', async () => {
        const res = await request.get(`/api/member/function/${createdFunction._id}`);
        expect(res.statusCode).toEqual(200);
    });

    it('should fetch all members', async () => {
        const res = await request.get('/api/member');
        expect(res.statusCode).toEqual(200);
    });

    it('should update a member return status code 404', async () => {
        var uid: string = uuid()
        const res = await request.patch(`/api/member/404`)
            .send({
                "name": `Member updated`
            });
        expect(res.statusCode).toEqual(404);
    });

    it('should update a member', async () => {
        const resUpdate = await request.patch(`/api/member/${createdMember._id}`)
            .send({
                "name": `Member updated`
            });
        expect(resUpdate.statusCode).toEqual(200);
        expect(resUpdate.body).toHaveProperty('_id');
        expect(resUpdate.body._id).toEqual(createdMember._id)
    });

    it('should add tag member', async () => {
        var uid: string = uuid()
        const resTag = await request.post('/api/tag')
            .send({
                "name": uid
            });
        expect(resTag.statusCode).toEqual(201);

        const res = await request.post(`/api/member/${createdMember._id}/tag`).send({
            "_id": resTag.body._id,
        });

        expect(res.statusCode).toEqual(200);
    });

    it('should remove tag member', async () => {
        var uid: string = uuid()
        const resTag = await request.post('/api/tag')
            .send({
                "name": uid
            });
        expect(resTag.statusCode).toEqual(201);

        const res = await request.post(`/api/member/${createdMember._id}/tag`).send({
            "_id": resTag.body._id,
        });
        expect(res.statusCode).toEqual(200);

        const resDel = await request.delete(`/api/member/${createdMember._id}/tag/${resTag.body._id}`);
        expect(resDel.statusCode).toEqual(200);
    });

    it('should be return status code 404 delete a member', async () => {
        const resDel = await request.delete(`/api/member/404`);
        expect(resDel.statusCode).toEqual(404);
    });

    it('should delete a member', async () => {
        const resDel = await request.delete(`/api/member/${createdMember._id}`);
        expect(resDel.statusCode).toEqual(204);

        const resGet = await request.get(`/api/member/${createdMember._id}`);
        expect(resGet.statusCode).toEqual(404);
    });
   
})