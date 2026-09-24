const http = require("http");
const url = require("url");
const fs = require("fs");

const productData = fs.readFileSync(`${__dirname}/products/productList.json`, 'utf-8');
const data = JSON.parse(productData);

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const pathname = req.url;

    if (pathname === '/') {
        const homePage = fs.readFileSync(`${__dirname}/home.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(homePage);
    }
    else if (pathname === '/products') {
        const productsPage = fs.readFileSync(`${__dirname}/productList.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(productsPage);
    }
    else if (pathname.startsWith('/products?id=')) {
        const productPage = fs.readFileSync(`${__dirname}/product.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(productPage);
    }
    else if (pathname === '/api/products') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    else if (pathname.startsWith('/api/products?id=')) {
        const queryObject = url.parse(req.url, true).query;
        const id = queryObject.id;
        const product = data.find(item => item.id == id);
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(product || null));
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});