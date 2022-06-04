const mongoose = require('mongoose');
const cors = require('cors')

var { graphqlHTTP } = require('express-graphql');
//var { buildSchema } = require('graphql');
const bodyParser = require('body-parser');
// task2
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

// connection URL for mongoDB
var mongoDB = 'mongodb://127.0.0.1/StateDB';
// connect
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect to Statedb:'));
db.on('connected', console.log.bind(console,'MongoDB connected to Statedb:'));

const express = require('express')
const app = express()

const port = 8080

app.use(cors())
app.use(express.json())

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolver,
  graphiql: true,
}));

//app.use('/api', require('./route/request'))


app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})
   

