const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
notes.get('/', (req, res) => {

  // Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/db/json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
notes.post('/', (req, res) => {
  console.log(req.body);

  const { isValid, errors } = req.body;

  const payload = {
    time: Date.now(),
    error_id: uuidv4(),
    errors,
  };

  if (!isValid) {
    readAndAppend(payload, './db/db/json');
    res.json(`Note added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation',
      error_id: payload.error_id,
    });
  }
});

module.exports = notes;
