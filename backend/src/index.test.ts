import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './index.js';

describe('GET /health', () => {
  it('should return status ok', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });
});
