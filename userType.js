const {GraphQLObjectType,GraphQLString} = require('graphql')
const userType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {type: GraphQLString},
        name: { type: GraphQLString },
        team: { type: GraphQLString },
        pnumber: {type: GraphQLString}
    })
})

module.exports = userType