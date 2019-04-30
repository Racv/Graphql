const mongo = require('mongoose')
const schema = mongo.Schema

const userSchema = new schema({
    name: String,
    team: String,
    pnumber: String
})

module.exports =  mongo.model('ravi', userSchema)