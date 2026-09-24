const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathname = req.url;

    if (pathname === "/") {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.end("<h1>Hello World!</h1>")
    }
    else if (pathname === "/about") {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.end("<h1>About Page</h1>")
    }
    else {
        res.writeHead(404, {
            "content-type": "text/html"
        })
        return res.end("<h1>Page Not Found</h1>")
    }
})
server.listen(3000)