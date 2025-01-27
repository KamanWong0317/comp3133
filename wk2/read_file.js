const fs = require('fs');
const { json } = require('stream/consumers');

console.log(`trying to read file input_file.txt `);

let filename = "input_file.txt";

// // Asynchronously reads the enter contents of a file
// // return file data in Buffer is there is no error
// 
// fs.readFile(filename, (err, data) => {
//     if (err){
//         console.log(`error while reading ${filename} : 
//             ${JSON.stringify(err)}`);
//     }else{
//         if (data){
//             console.log(`Data from ${filename} : \n ${data}`);
//         }else{
//             console.log(`No data received from ${filename}`);
//         }
//     }
// })

// console.log(`Complete reading file ${filename}`);

// synchronous read operation
console.log(`\nTrying to read ${filename} synchronously`);

let fileData = fs.readFileSync(filename)
console.log(`fileDate: ${fileData}`);

console.log(`Complete reading file ${filename} synchronously`)

// use readfile within async function
const readFileDate = async() => {
    try{
        const data = await fs.promises.readFile(filename);
        console.log(`data from file : ${data} `);
    }catch(error){
        console.log(`Error ehile reading file: ${JSON.stringify(error)}`)
    }
}

readFileDate()