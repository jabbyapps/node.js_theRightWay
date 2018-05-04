'use strict';

const fs = require('fs');

fs.writeFile('target.txt', 'hello humans', (err) => {
    if (err) {
        throw err;
    }
    console.log('File saved...');
});