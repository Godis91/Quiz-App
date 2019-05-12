const fs = require('fs');
const express = require('express');

//initialize express app
const app = express();

//initialize Json body parser for our form inputs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

//post request
//@route is /api/questions
//this route gets us the questions
app.get('/api/test', (req, res) => {
  fs.readFile('questions.json', 'utf8', (error, data) => {
    if (error) return res.status(501).send('Server error');

    res.send(data);
  });
});

//get request
//@route /api/answers
// this route gets us the answers
app.get('/api/answers', (req, res) => {
  fs.readFile('answers.json', 'utf8', (error, data) => {
    if (error) {
      return res.status(501).send('Server Error');
    }

    res.send(data);
  });
});

//Post request
//@route is api/user
//allows us take in user records
app.post('/user', (req, res) => {
  const { name, email, address } = req.body;

  const user = {
    name,
    email,
    address
  };

  res.send(user);
});

//create heroku and localhost ports
const port = process.env.PORT || 4000;

//listen to server
app.listen(port, () => console.log(`Server is up on port ${port}`));
