const fs = require('fs')

let filename = "data.txt"

// open the file
/*
file modes
r - read only
a - append
r+ - read and write
w+ - write and read
*/

// opens the file in given mode
// return err if unsuccessful
// return file disscriptor if successful
fs.open(filename, 'r+', (err, fd)=>{
    if (err){
        console.log(`Unable to open file ${filename} : ${JSON.stringify(err)}`)
    }else{
        console.log(`File ${filename} opened successful`)

        let fileData = fs.readFileSync(fd)
        console.log(`fileDate: ${fileData}`);
        
        let dataToWrite = "Hey Tursday! Happy Friday !"
        fs.write(fd, dataToWrite, (err)=>{
            if (err){            
                console.log(`Unable to write to file ${file} : ${JSON.stringify(err)}`);
            }else{
                console.log(`Data written successfully to ${filename}`);
                fs.close(fd)
            }    
        })
    }
})
