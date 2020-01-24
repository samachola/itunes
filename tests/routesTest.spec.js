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

	describe('Artists', () => {
		it('should get artists', async () => {
			const data = await request.get(`${baseUrl}/artists`);
			expect(data.status).toEqual(200);
		});
	})
});