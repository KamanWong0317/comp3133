const fs = require('fs')

let filename = "output_file.txt";
console.log(`Trying to write to ${filename}`);

let dataBuffer = Buffer.from("Wonderful Weather");

// // Asynchronously writes data to file
// // if the file exists, writeFile() overwrites the existing data
// fs.writeFile(filename, dataBuffer, (err)=>{
//     if (err){
//         console.log(`Unable to write to ${filename} : ${JSON.stringify(err)}`);
//     }else{
//         console.log(`Data writting successfully to ${filename}`);
//     }
// })

dataBuffer = Buffer.from("\nThis is a new data to be appended to output_file.txt")
// use flag : 'a' to append to existing content of file 
fs.writeFile(filename, dataBuffer, {flag: 'a'},(err)=>{
    if (err){
        console.log(`Unable to write to ${filename} : ${JSON.stringify(err)}`);
    }else{
        console.log(`Data writting successfully to ${filename}`);
    }
})

dataBuffer = Buffer.from([1,2,3,4,5])
// writing synchonously to file
let err = fs.writeFileSync(filename, dataBuffer)

if (err){
    console.log(`\nUnable to write to ${filename} : ${JSON.stringify(err)}`);
}else{
    console.log(`\nSync writing completes successfully`);
}
