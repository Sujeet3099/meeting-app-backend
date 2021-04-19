const request = require('supertest');
const app = require('./server');

describe('GET / ', () => {
  it('It should respond with an array of meetings', async () => {
    const res = await request(app).get('/meeting');
    expect(res.statusCode).toBe(200);
  });
});
