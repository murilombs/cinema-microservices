require('dotenv-safe').load();
require('./config/mongodb.test').runTest();
require('./server/server.test').runTest();
require('./repository/repository.test').runTests();
require('./api/movies.test').runTest();