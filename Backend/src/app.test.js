import request from 'supertest';
import app from './server'; // path to your express app

describe('GET /', () => {
  it('should not expose .env file', async () => {
    const response = await request(app).get('/.env');
    expect(response.status).toBe(404); // should not return .env file
  });

  it('should load the frontend', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200); // should return the index.html file
  });
});
