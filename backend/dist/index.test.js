import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './index';
describe('GET /health', () => {
    it('should return status ok', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'ok');
    });
});
//# sourceMappingURL=index.test.js.map