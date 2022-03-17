import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';


const app = express();

app.get('/', (req, res) => {
  res.send("GraphQl is amazing");
});


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));



app.listen(8084, () => console.log("Running server on port 8084"));