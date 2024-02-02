/**************************************************************************************************************/
/*** Day 02                                                                                                   */
/*** Problem 2: File Writer                                                                                   */
/*** Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user 
input content as input. The function should write the content to the specified file using the fs module.      */
/**************************************************************************************************************/
const { writeFile } = require('fs');

const writeToFile = (filePath, content) => {
    writeFile(filePath, content, (err) => {
        console.log(`---------------------------- Writing to file ${filePath} ----------------------------`);
        err ? console.error(`Error writing to the file - ${filePath}: ${err}`) :
            console.log(`Data written to ${content}`);
    });
};

writeToFile('./day-02/test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt
writeToFile('./day-02/test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...

module.exports = {
    writeToFile,
};