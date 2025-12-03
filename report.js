const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/1844288-6b206bf6-c3ea-4731-a4be-9670839cf91e?access_key=${process.env.pmat_key}`,
    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    },
    iterationCount: 1,
}, function (err) {
    if (err) throw err;
    console.log('Collection run complete!');
});