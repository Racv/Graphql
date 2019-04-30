const {GraphQLSchema,GraphQLString, GraphQLObjectType} = require('graphql')
const userType = require('./userType')
const userSchema = require('./userSchema')
const mutation  = require('./mutation')
User = {
    "name": "Ravi Singh",
    "team": "Mango",
    "pnumber": "in22912923"
}
const userQuery = new GraphQLObjectType({
    name: 'userQuery',
    fields: {
        user: {
            type:userType,
            args: { id: {type: GraphQLString} },
            resolve(parent ,args){
                return userSchema.findById(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: userQuery,
    mutation: mutation
})