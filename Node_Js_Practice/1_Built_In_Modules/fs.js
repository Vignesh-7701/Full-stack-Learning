const fs = require("fs");


// async executes in order and not in order written - refer log
// readFile , writeFile -> async -> use (err , result) callback
// readFileSync , writeFileSync -> sync -> use try catch
// unlink -> for delete file async.
// existSync -> check file exists
// write replaces data , but append joins


fs.readFile('data.txt' , "utf-8" , (err , result) =>{
    if(err){
        console.log("Error Occured : " , err);
        return;
    }
    console.log("Data : " , result);
    console.log("---READFILE - Async I run after sync\n");
    
})



fs.writeFile("data.txt" , "Hello I'm Writting this File" , (err) =>{
    if(err){
        console.log("Error Occured : " , err);
        return;
    }
    console.log("Write Success..!\n");
})



try{
    const data = fs.readFileSync("data.txt" , "utf-8");
    console.log(data);
    console.log("---READFILESYNC - I'm sync I run first\n");
}
catch(err){
    console.log("Error in ReadFileSync" , err);
}



fs.appendFile("data.txt", "\n\nNew Line Added from append", (err) => {
  if (err) {
    console.log("Error");
    return;
  }
  console.log("Content appended");
  console.log("---Async - Append\n");
})


fs.mkdir("Mk_Dir" , (err)=>{
    if(err){
        console.log("Error : " , err);
        return;
    }
    console.log("Folder Created using Mk_dir");
    console.log("---async I'm mk_dir\n");
    
})

// "." all files
// 
fs.readdir("." , (err , files) => {
    if(err){
        console.log("Error : " , err);
        return;
    }
    // this line specify read txt file only
    const txtFiles = files.filter(file => file.endsWith(".txt")); 
    console.log(txtFiles);
})

// OTHER FS - fs.rename() , fs.unlink() - delete file , fs.rmdir() - deletes a folder
// fs.existsSync() - check file existance , fs.stat() - details about file



//Streams -> Also uses fs , usefull for large files..

//Internally uses Event Emitters , Buffers

const readStream = fs.createReadStream("data.txt", "utf8");

//emitted by stream on read data
readStream.on("data", (chunk) => {
  console.log("Chunk : ", chunk);
});

const writeStream = fs.createWriteStream("data2.txt");

writeStream.write("Hello\n");
writeStream.write("This is Viki\n");
writeStream.end();   


// There is an impportant condition in streams called BACKPRESSURE -(Reads fast Writes slow)
//To handle this use Pipe

const read = fs.createReadStream("data.txt");
const write = fs.createWriteStream("data2.txt");

read.pipe(write); // Handle BackPressure 

