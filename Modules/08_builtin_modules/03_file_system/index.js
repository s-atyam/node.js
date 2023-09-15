// const fs = require('node:fs')


// const fileContent = fs.readFileSync("./file.txt")
// const fileContent_1 = fs.readFileSync("./file.txt",'utf-8')

// // console.log(fileContent)
// // console.log(fileContent_1)

// fs.readFile('./file.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })

// fs.writeFileSync('./temp.txt',"some random text - 123456789 ")

// fs.writeFile('./temp.txt',"some random text",{flag:'a'},(err)=>{ // if we want to append the contents we add an object flag
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file written");
//     }
// })



// const fs = require('node:fs/promises')

// // fs.readFile('file.txt','utf-8')
// //     .then((data)=> console.log(data))
// //     .catch((err)=> console.log(err))

// async function read_file(){
//     try{
//         const data = await fs.readFile('file.txt','utf-8');
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// } 


// Work with data in chunks instead of waiting for the entire data to be available at once
// stream is a in-built node modules taht inherit from the events emitter class

const fs = require('node:fs')
const zlib = require('node:zlib') // allow us to create zip files

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt',{
    encoding:'utf-8',
    highWaterMark:2 // default size is 64000 byte
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));


const writealeStream = fs.createWriteStream('./file2.txt');

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writealeStream.write(chunk);
// })

// we can implement the above by using pipes as well

readableStream.pipe(writealeStream);

// Types of streams

// Readable streams from which data can be read
// Writable streams to which we can write data
// Duplex streams that are both readable and writable
// Transform streams that can modify or transform the data as it is written and read

// reading from a file as readable streams
// writing to a file as writable streams
// sockets as duplex streams
// file compression where you can write compressed data and read de-compressed data to and from a file as a transform stream