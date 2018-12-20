const request = require('supertest');
const School = require('../../models/school');
const mongoose = require('mongoose');

let server;

describe('/api/schools', () => {
  beforeEach(() => { server = require('../../index'); });
  afterEach(async () => {
    server.close();
    await School.deleteMany({});
  });

  const schools = [
    {
      name: 'school1',
      type: 'private',
      cnpj: '22.428.097/0001-70',
      email: 'school1@email.com',
      password: '1234',
      telephone: '1234-1234'
    },
    {
      name: 'school2',
      type: 'private',
      cnpj: '90.167.344/0001-82',
      email: 'school2@email.com',
      password: '1234',
      telephone: '1234-1234'
    }
  ];

  describe('GET /', () => {
    it('should return all schools', async () => {
      await School.collection.insertMany(schools);

      const res = await request(server).get('/api/schools');

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(s => s.name === 'school1')).toBeTruthy();
      expect(res.body.some(s => s.name === 'school2')).toBeTruthy();
    });
  });

  describe('GET /:id', () => {
    it('should return a school with the given id', async () => {
      const school = new School(schools[0]);
      await school.save();

      const res = await request(server).get(`/api/schools/${school._id}`);

      expect(res.status).toBe(200);
      expect(res.body.name === 'school1').toBeTruthy();
    });

    it('should return 404 if no school with the given id exists', async () => {
      const id = mongoose.Types.ObjectId;
      const res = await request(server).get(`/api/schools/${id}`);

      expect(res.status).toBe(404);
    });
  });
});
