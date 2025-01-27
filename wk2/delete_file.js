const fs = require('fs')

let filename = "file_to_dalete.txt";
console.log(`Tring to delete ${filename}`)
console.log(`Ensure that ${filename} is created befroe you test this code`);

fs.unlink(filename, (err) =>{
    if(err){
        console.log(`Error while deleting ${filename} : ${JSON.stringify(err)}`);
    }else{
        console.log(`${filename} deleted successfully`);
    }
});