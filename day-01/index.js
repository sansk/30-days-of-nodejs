/**************************************************************************************************************/
/*** Day 01                                                                                                   */
/*** Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module.The function should print the content to the console.    */
/**************************************************************************************************************/
const { readFile } = require('fs');

const readFileContent = (filePath) => {
    readFile(filePath, (err, content) => {
        console.log(`------------------ ${filePath} ------------------`)

        if (err) console.error(`Error reading the file - ${filePath}: ${err}`);
        console.log(`File Content:\n ${content}`);
    });
};

readFileContent('./day-01/test-files/file1.txt');
// Expected Output: Content of file1.txt
readFileContent('./day-01/test-files/empty-file.txt');
// Expected Output: (empty string)
readFileContent('./day-01/test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...

module.exports = {
    readFileContent,
};