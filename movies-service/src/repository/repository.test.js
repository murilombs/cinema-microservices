const test = require('tape')
const repository = require('./repository')

function runTests() {
    var id = null

    test('Repository GetAllMovies', (t) => {
        repository.getAllMovies((err, movies) => {
            if (movies && movies.length > 0)
                id = movies[0]._id
            
            t.assert(!err && movies && movies.length > 0, 'All Movies Returned')
            t.end();
        })
    })

    test('Repository GetMovieByID', (t) => {
        if (!id) {
            t.assert(false, 'Movies by Id Returned')
            t.end()
            return
        }
        repository.getMoviesById(id, (err, movies) => {
            t.assert(!err && movies, 'Movie by Id Returned')
            t.end()
        })
    })

    test('Repository GetMoviesPremier', (t) => {
        repository.getMoviesPremiers((err, movies) => {
            t.assert(!err && movies && movies.length >= 0, 'Premiers Movies Returned')
            t.end()
        })
    })

    test('Repository Disconnect', (t) => {
        t.assert(repository.disconnect(), 'Disconnect OK')
        t.end()
    })
}

module.exports =  { runTests };