const fs = require('fs');
const express = require('express');

//initialize express app
const app = express();

//initialize Json body parser for our form inputs
app.use(express.json());

//create heroku and localhost ports
const port = process.env.PORT || 4000;

//listen to server
app.listen(port, () => console.log(`Server is up on port ${port}`));
