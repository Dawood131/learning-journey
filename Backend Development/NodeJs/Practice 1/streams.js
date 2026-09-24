const { log } = require('console');
const fs = require('fs')

const readStream = fs.createReadStream('./txt/test.txt')
const writeStream = fs.createWriteStream('./txt/testOutput.txt')

readStream.on('data', (chunk) => {
    console.log(`Data Mila: ${chunk.length} bytes`);
})
readStream.on('end', () => {
    console.log(`Reading Complete`);
})

writeStream.on('finish', () => {
    console.log(`File Transfer`);
})

readStream.pipe(writeStream)