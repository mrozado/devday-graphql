const express = require("express");
const graphQLHttp = require("express-graphql");
const schema = require("./schema");
const app = express();
const port = 5500;
// app.get("/", (req, res) => res.send("Hello World!"));

app.use(
  "/graphql",
  graphQLHttp({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
