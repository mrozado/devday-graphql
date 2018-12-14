const express = require("express");
const graphQLHttp = require("express-graphql");
const app = express();
const port = 5500;
app.get("/", (req, res) => res.send("Hello World!"));

app.get(
  "/graphql",
  graphQLHttp({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
