module.exports = {
    port: 8081,
    dbPort: 27017,
    dbURL: 'mongodb://localhost/articles',
    dbOptions: {},
    secret: 'my secret key is aboba',
    maxAge: 3 * 24 * 60 * 60,
    client: 'http://localhost:3000'
}
