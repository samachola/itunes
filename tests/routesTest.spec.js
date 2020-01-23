const request = require('request');
const server = require('../server');
const baseUrl = 'http://localhost:3000/api/v1';
describe('Routes', () => {
	beforeAll(() => {
		server.listen(process.env.PORT || 3000)
	});

	afterAll(() => {
		server.close();
	});

	describe('Genres', () => {
		it('should get genres', async () => {
			const data = await request.get(`${baseUrl}/genres`);
			expect(data.status).toEqual(200);
		});
	})
});