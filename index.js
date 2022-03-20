import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { server } from './data/schema';


const app = express();

app.get('/', (req, res) => {
  res.send("GraphQl is amazing");
});

async function startServer(){
  await server.start()
  server.applyMiddleware({app});
}

startServer();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   graphiql: true,
// }));



app.listen(8099, () => console.log(`Running server on port 8099 ${server.graphqlPath}`));