import http from 'node:http'
import cluster from 'node:cluster'
import { cpus } from 'node:os'

const PORT = 3000
const createChildrenProcess = () => {
    const processLength = cpus().length

    console.log(`\nServer initilized with PID ${process.id}`)
    console.log(`Creating ${processLength} children process`)

    for (let i = 0; i < processLength; i++) {
        cluster.fork()
    }
}

const initChildProcess = () => {
    const server = http.createServer((request, response) => {
        response.writeHead(200)
                .end('Home page')
    })

    server.listen(PORT)
        .on('listening', 
            () => console.log(`\nProcess ${process.pid} initialized on port ${PORT}.`)
        )
}

if (cluster.isPrimary) createChildrenProcess()
else initChildProcess()