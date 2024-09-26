const connectToMongo = require("./db")
const express = require('express')
const auth = require('./routes/auth')
const notes = require('./routes/notes')

connectToMongo();
const port = 5000;
const app = express()


app.use(express.json());
console.log("Middleware applied");

//Available Routes
app.use('/api/auth', auth);
app.use('/api/notes', notes);
console.log("Routes set up");

app.listen(port, ()=>{
    console.log(`INotebook Backend listening at http://localhost:${port}`);
})