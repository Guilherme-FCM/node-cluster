import http from 'node:http'

const PORT = 3000

const server = http.createServer((request, response) => {
    response.writeHead(200)
            .end('Home page')
})

server.listen(PORT)
      .on('listening', () => console.log(`Server started on port ${PORT}.`))