import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'

const app = express();

// Settings
const port = process.env.PORT || 3000;

// ROUTES
app.get('/', (req, res) => {
    res.json({
        message: 'INIT'
    })
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port, () => console.log('Server on port ', port));