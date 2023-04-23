// files
const fs = require('fs')

//reading a file

let content = fs.readFileSync('sample.txt')
console.log('data of fiel'+ content)



/*  Writing in a file
if the file name that is passed doesn't not exists a 
new file will be created with its name and the data will 
be written on that file*/


fs.writeFileSync('abc.txt', 'This is file ')
console.log('File has been written')

//append a file
//appendFileSync method add new data to a previosuly created file


fs.appendFileSync('sample.txt','append data in existing file')

console.log('file has been appended ')



//deleting a file

fs.unlinkSync('abc.txt')
console.log('file has been deleted')


// Rename file Synchronously
//fs.renameSync(new_file_path, old_file_path)
var fs = require('fs');
 
fs.renameSync('sample.txt', 'sample_old.txt');
console.log('File Renamed.');