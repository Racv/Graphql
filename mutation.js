const {GraphQLObjectType, GraphQLString} = require('graphql')
const userType = require('./userType')
const userSchema = require('./userSchema')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: userType,
            args: {
                name: {type: GraphQLString},
                team: {type: GraphQLString},
                pnumber: {type: GraphQLString}
            },
            resolve(parent, args) {
                const newUser = new userSchema({
                  name: args.name,
                  team: args.team,
                  pnumber: args.pnumber
                })
                return newUser.save()
            }
        }
    }
})

module.exports = mutation