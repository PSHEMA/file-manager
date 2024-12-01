const request = require('supertest');
const app = require('../app');
const User = require('../src/models/User');
const File = require('../src/models/File');

let token;

describe('File Management', () => {
    beforeAll(async () => {
        await User.sync({ force: true });
        await File.sync({ force: true });

        const response = await request(app)
            .post('/auth/register')
            .send({ username: 'testuser', email: 'Gt5Z2@example.com', password: 'testpassword' });

        token = (await request(app)
            .post('/auth/login')
            .send({ username: 'testuser', password: 'testpassword' })).body.token;
    });

    test('should upload a file', async () => {
        const response = await request(app)
            .post('/files/upload')
            .set('Authorization', `Bearer ${token}`)
            .attach('file', 'tests/test.txt');

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('File uploaded successfully');
    });

    test('should retrieve files', async () => {
        const response = await request(app)
            .get('/files')
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.files).toBeInstanceOf(Array);
    })
})