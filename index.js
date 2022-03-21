import express from 'express';
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



app.listen({ port: 4000 }, () => console.log(`Running server on port http://localhost:4000${server.graphqlPath}`));