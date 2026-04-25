const path = require('path');

console.log("File - ", path.basename(__filename));

console.log("Directory - ", path.dirname(__filename));

console.log("Extension - ", path.extname(__filename));

const joinedPath = path.join("folder" , "file.txt");
console.log("Joined Path - ", joinedPath);


const resolvedPath = path.resolve('folder', 'file.txt');
console.log("Resolved Path - ", resolvedPath);

console.log(__dirname);
