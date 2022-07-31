//HEADER: project title
//description, Table of contents, installation, usage, license, contributing, tests, questions
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (!err) {
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            } else {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        });
    });
};

module.exports = writeFile;