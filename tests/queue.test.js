const fileProcessingQueue = require('../src/config/queue');

describe('File Processing Queue', () => {
    test('should add a job to the queue', async () => {
        const jobId = await fileProcessingQueue.add({ fileId: 1, filepath: '/path/to/file' });

        expect(jobId).toBeDefined();
        expect(job.data).toEqual({ fileId: 1, filepath: '/path/to/file' });
    });

    test('should process a job from the queue', async () => {
        const mockProcess = jest.fn();
        fileProcessingQueue.process(mockProcess);

        await fileProcessingQueue.add({ fileId: 1, filepath: '/path/to/file' });
        await new Promise((resolve) => setTimeout(resolve, 100));

        expect(mockProcess).toHaveBeenCalled();
    });
});