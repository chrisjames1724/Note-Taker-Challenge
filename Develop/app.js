const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
  });

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/db/db.json");
});

app.get("/api/notes", (req, res) => {
    // sending the JSON file
  res.sendFile(__dirname + "/db/db.json");
    // reads the JSON file 
    // Serializes 
    // Send the serialized JSON 
    // Example tutorial: https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/#serializing-deserializing-json
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
