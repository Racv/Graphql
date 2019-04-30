const mongo = require('mongoose')

const initDB = () =>{
    mongo.connect(
        'mongodb://localhost:27017/koa_graphql',
        {useNewUrlParser: true}
    )

    mongo.connection.once('open', () => {
        console.log("connected to mongo db")
    })
}

module.exports = initDB