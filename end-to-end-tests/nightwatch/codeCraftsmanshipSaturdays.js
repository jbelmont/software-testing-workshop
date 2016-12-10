module.exports = {
    'Code Craftsmanship Saturdays': (client) => {
        client
            .url('https://localhost:3000')
            .pause(3000)
            .end();
    }
};