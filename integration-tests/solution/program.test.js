const test = require('tape');

const route = require('../routes/index');

test('Practice Integration Testing with a simple Node/Express API', nest => {

    nest.test('Make GET request to localhost:3000 and render default test', assert => {
        const msg = 'Logger logs router calls to memory';
        const logMsg = 'hello';
        const url = `http://127.0.0.1/msg/${ logMsg }`;

        const logger = createLog({ output: 'memory' });
        const routeHandler = createRoute({ logger });

        routeHandler({ url });

        const actual = logger.memoryLog[0];
        const expected = logMsg;

        assert.equal(actual, expected, msg);
        assert.end();
    });

});