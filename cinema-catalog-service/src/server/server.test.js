const test = require('tape')
const server = require('./server')

function apiMock() {
    console.log('Do nothing')
}

function runTest() {
    test('Server Start', (t) => {
        server.start(apiMock, null, (err, srv) => {
            t.assert(!err && srv, 'Server started')
            t.end()
        })
    })

    test('Server Stop', (t) => {
        t.assert(server.stop(), 'Server stop')
        t.end()
    })
}

module.exports = { runTest }