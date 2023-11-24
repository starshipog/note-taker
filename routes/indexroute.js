const express = require('express');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./notes');

// // TODO: import your diagnostics route
// const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/notes', notesRouter);



// app.use('/noteshtml', noteshtmlRouter);

// // TODO: Initialize diagnostics route
// app.use('/diagnostics', diagnosticsRouter);

module.exports = app;