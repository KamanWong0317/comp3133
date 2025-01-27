const fs = require('fs');

let fileName = 'students.csv';
console.log(`Processing sstudent data from ${fileName}`);

fs.readFile(fileName, "utf-8", (err, data)=>{
    if (err){
        console.log(`Unable to read from ${fileName} : ${JSON.stringify(err)}`);
    }else if (data){
        // console.log(`file data : \n${data}`);
        const rows = data.split("\n");
        let columns =[];
        let program = "";
        let fileToWrite = "";
        let dataToWrite = "";

        rows.forEach(row => {
            columns = row.split(",");
            program = columns[2]

            if (program !== undefined){
                fileToWrite = `${program}.txt`;
                dataToWrite = `${row}\n`;

                fs.appendFile(fileToWrite, dataToWrite, 'utf-8', (writteErr)=>{
                    if(writteErr){
                        console.log(`Unable to append to ${fileToWrite} : 
                            ${JSON.stringify(writteErr)}`);
                    }else{
                        console.log(`data written to ${fileToWrite}`);
                    }
                })
            }
        });
    }else{
        console.log(`No data avabilable from file.`)
    }
})