import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send("GraphQl is amazing");
});

const root = { friend: ()=> {
  return {
    "id": 982093403,
    "firstName": "Bridget",
    "lastName": "Grace",
    "gender": "Male",
    "language": "English",
    "email": [{ email: "grat@yahoo.com"}, {email: "soaddo@yahoo.com"}]
  }
}};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));



app.listen(8084, () => console.log("Running server on port 8084"));