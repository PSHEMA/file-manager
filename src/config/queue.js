const Queue = require('bull');

const fileProcessingQueue = new Queue('file-queue', {
    redis: {
        host: '127.0.0.1',
        port: 6379,
    },
});

module.exports = fileProcessingQueue;