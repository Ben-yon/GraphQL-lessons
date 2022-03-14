import express from 'express';


const app = express();

app.get('/', (req, res) => {
  res.send("GraphQl is amazing");
});



app.listen(8080, () => console.log("Running server on port 8080"));