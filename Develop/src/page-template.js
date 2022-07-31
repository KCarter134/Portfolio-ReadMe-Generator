const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (!err) {
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            } else {
                reject(err);
            }
        });
    });
};

module.exports = writeFile;