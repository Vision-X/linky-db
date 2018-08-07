const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.get("/links", (request, response) => {
  queries.list("links").then(item => {
    response.json({item});
  }).catch(console.error)
})

app.get("/links/:id", (request, response) => {
  queries.read("links", request.params.id).then(item => {
    item
        ? response.json({item})
        : response.sendStatus(404)
  }).catch(console.error);
})

app.post("/links", (request, response) => {
  queries.create("links", request.body).then(item => {
    response.status(201).json({item});
  }).catch(console.error);
});

app.delete("/links/:id", (request, response) => {
  queries.delete("links", request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(console.error);
});

app.put("/links/:id", (request, response) => {
  queries.update("links", request.params.id, request.body).then(item => {
    response.json({item});
  }).catch(console.error);
});

module.exports = app;
