'use strict'

// Se importan los modulos de graphql
const { graphql, buildSchema } = require('graphql');

const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.port || 3000;

// Se define el esquema
const schema = buildSchema(`
  type Query {
    hello: String,
  }
`);

// Configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
}

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen( port, () => {
    console.log('Server escuchando en el puerto http://localhost:' + port + '/api');
})