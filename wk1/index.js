console.log("Week 1 - buffer example");

// create a buffer from String data
let buf1 = Buffer.from('Hello');

console.log(buf1);
// template literals
console.log(`buf1: ${buf1}`);
// console.log(`5 plus 6 is ${5+6}`);
console.log(buf1.toString());
console.log(`Buffer in JOSN formt : ${buf1.toJSON()}`)
// console.log(`Buffer in JOSN formt : ${JSON.stringify(buf1.toJSON())}`)
console.log(buf1.toJSON());

// Task : write a loop to interate over the buffer
// show the value of element
console.log(`buf1[0]: ${buf1[0]}`);
console.log(`buf1[3]: ${buf1[3]}`);
console.log(`number of elements in buffer : ${buf1.length}`);

for (let index = 0; index < buf1.length; index++) {
    console.log(`i = ${index}, buf1[${index}] = ${buf1[index]} ${String.fromCharCode(buf1[index])}`);
}

console.log(`Buffer in String format : ${buf1.toString()}`);
console.log(`Buffer in JSON format : ${JSON.stringify(buf1.toJSON())}`);
console.log(`Buffer in Hex format : ${buf1.toString('hex')}`);
console.log(`Buffer in UTF-8 format : ${buf1.toString('utf-8')}`);
console.log(`Buffer in UTF-16le format : ${buf1.toString('utf-16le')}`);

// on MAcOs Ctrl+CMD+Space for emoji board
// on WindowOs Windows+. for emoji board
buf2 = Buffer.from(`💤😂🤣`)
console.log(`Buffer in String format : ${buf2.toString()}`);
console.log(`Buffer in JSON format : ${JSON.stringify(buf2.toJSON())}`);
console.log(`Buffer in Hex format : ${buf2.toString('hex')}`);
console.log(`Buffer in UTF-8 format : ${buf2.toString('utf-8')}`);
console.log(`Buffer in UTF-16le format : ${buf2.toString('utf-16le')}`);