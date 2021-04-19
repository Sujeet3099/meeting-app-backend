const request = require('supertest');
const app = require('./server');

describe('Post Endpoints', () => {
  it('It should create a new meeting', async () => {
    const res = await request(app).post('/meeting').send({
      name: 'Sujeetkkk',
      people: 2,
      meetingDate: '2021-04-20',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
  });
});
