const koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const initDB = require('./database')

//Importing schema
var schema = require('./schema')

//initializing DB server
initDB()

// creating the app
const app = new koa()

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})))

app.listen(4000, () => {
    console.log("Starting koa server on port 4000")
})