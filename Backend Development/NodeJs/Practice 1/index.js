const fs = require('fs');

// Blocking Code

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log("Text is:", textIn)

const textOut = `${textIn} It is built on Google's V8 JavaScript engine, the same engine used by the Chrome browser.`
fs.writeFileSync('./txt/output.txt', textOut)
console.log('Final Definition is:', textOut);

// Non-Blocking Code

const textAdd = `Hello, I'm currently learning Mern Stack Development`;

fs.writeFile('./txt/start.txt', textAdd, err => {
    if (err) return console.log('Write Error:', err);

    fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
        if (err) return console.log('Read Error:', err);

        console.log(data);

        fs.writeFile('./txt/final.txt', data, err => {
            if (err) return console.log('Final Write Error:', err);

            fs.appendFile(
                './txt/final.txt',
                `\nAnd after that Deployment Process`,
                err => {
                    if (err) return console.log('Append Error:', err);

                    console.log('Final file generated!');
                }
            );
        });
    });
});

console.log('File Generating!');