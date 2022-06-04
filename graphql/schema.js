const { buildSchema } = require('graphql');

var schema = buildSchema(`
   
   type Query {
       censusdata: [Census!]
       censusByState(statename:String!):[Census!]
       findByCity(cityname:String!):[Census!]
    }
    type Census{
        _id: ID!
        city: String!
        state: String!
        census: String!
    }
   `);
module.exports = schema
