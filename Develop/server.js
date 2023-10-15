const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/indexroute.js');


const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );



// GET /notes should return the notes.html file.
// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



// GET * should return the index.html file.
// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
