const fileProcessingQueue = require('../config/queue');

fileProcessingQueue.process(async (job) => {
    const { fileId, filepath } = job.data;
    
    console.log(`Processing file ${fileId} at ${filepath}`);
});