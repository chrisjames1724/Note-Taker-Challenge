const express = require("express");
const fs = require("fs")
const app = express();
app.use(express.json())
app.use(express.static('public'))
const port = 3001;
const store = require('./public/assets/js/temp');



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
  // reads the JSON file
  const noteData = fs.readFileSync("./db/db.json")
  //this is a string
console.log("note Data: ", noteData)
  const parsedNotes = JSON.parse(noteData)
  console.log("Parsed NOtes: ", parsedNotes)
  res.json(parsedNotes);
  // res.sendFile(__dirname + "/db/db.json");
});
  


app.delete ("/api/notes:/id", (req, res) => {
  model.destroy()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



