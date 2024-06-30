const cron = require('node-cron');
const main = require('./notify');

const task = cron.schedule('31 21 * * *', async () => {
    try {
      await main();
      console.log('Cron ran')
    } catch (error) {
      console.error('Error in scheduled task:', error);
    }
  });

console.log('Scheduler is running...');

function stopCronJob() {
    task.stop();
    console.log('Scheduler has been stopped.');
} 

// Check command-line arguments
if (process.argv.includes('--stop')) {
    stopCronJob();
  }