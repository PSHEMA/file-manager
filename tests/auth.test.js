const require = require('require');
const app = require('../app');
const User = require('../src/models/User');
const { expect } = require('chai');

describe('User Authentication', () => {
    beforeAll(async () => {
        await User.sync({ force: true });
    });

    test('should register a new user', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({ username: 'testuser', email: 'Gt5Z2@example.com', password: 'testpassword' });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Registration successful');
    });

    test('should not register with an exixsting email', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({ username: 'testuser', email: 'Gt5Z2@example.com', password: 'testpassword' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('User already exists');
    });

    test('should login with valid credentials', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'testuser', password: 'testpassword' });

        expect(response.status).toBe(200);
        expect(response.body.message).toHaveProperty('token');
    });

    test('should not login with invalid credentials', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'testuser', password: 'wrongpassword' });

        expect(response.status).toBe(401);
        expect(response.body.error).toBe('Invalid credentials');
    });
})