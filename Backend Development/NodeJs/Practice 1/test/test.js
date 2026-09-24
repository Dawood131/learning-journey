const http = require('http');
const fs = require('fs');
const url = require('url');

//  Test # 1

// const testRead = fs.readFileSync('./data.txt', 'utf-8');
// console.log(testRead);

//  Test # 2

// const server = http.createServer((req, res) => {
//     fs.readFile('./data.txt', 'utf-8', (err, data) => {
//         if (err) return console.log(err);

//         res.end(data);
//     });
// });

// server.listen(3000);

//  Test # 3

// console.log('START');

// fs.readFile('./data.txt', 'utf-8', (err, data) => {
//     if (err) return console.log(err);
//     console.log(data)
// });

// console.log('END');

//  Test # 4

// const server = http.createServer((req, res) => {

//     fs.readFile('./dataa.txt', 'utf-8', (err, data) => {

//         if (err) {
//             res.writeHead(404, {
//                 "content-type": "text/html"
//             })
//             return res.end(`<h1>Page Not Found</h1>`)
//         }

//         res.end(data);
//     });

// });

// server.listen(3000);


//  Test # 5

// const server = http.createServer((req, res) => {
//     const pathname = req.url;

//     if (pathname === '/') {
//         res.writeHead(200, {
//             "content-type": "text/html"
//         })
//         res.end(`<h1>Home Page</h1>`)
//     }
//     else if (pathname === '/about') {
//         res.writeHead(200, {
//             "content-type": "text/html"
//         })
//         res.end(`<h1>About Page</h1>`)
//     }
//     else if (pathname === '/contact') {
//         res.writeHead(200, {
//             "content-type": "text/html"
//         })
//         res.end(`<h1>Contact Page </h1>`)
//     }
//     else {
//         res.writeHead(404, {
//             "content-type": "text/html"
//         })
//         res.end(`<h1>Page Not Found</h1>`)
//     }
// });

// server.listen(3000)


//  Test # 6

const server = http.createServer((req, res) => {
    const pathname = req.url;

    fs.readFile('../products/productList.json', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, {
                'content-type': 'application/json'
            });

            return res.end(JSON.stringify({
                message: 'Unable to read products'
            }));
        }

        const products = JSON.parse(data);

        // Get all products
        if (pathname === '/') {
            res.writeHead(200, {
                'content-type': 'application/json'
            });

            return res.end(JSON.stringify(products));
        }

        // Get single product
        else if (pathname.startsWith('/product?id=')) {
            const dataObj = url.parse(req.url, true).query;
            const id = Number(dataObj.id);

            const productCard = products.find(item => item.id === id);

            if (!productCard) {
                res.writeHead(404, {
                    'content-type': 'application/json'
                });

                return res.end(JSON.stringify({
                    message: 'Product not found'
                }));
            }

            res.writeHead(200, {
                'content-type': 'application/json'
            });

            return res.end(JSON.stringify(productCard));
        }

        // Route not found
        else {
            res.writeHead(404, {
                'content-type': 'text/html'
            });

            return res.end('<h1>Page Not Found</h1>');
        }
    });
});

server.listen(3000);