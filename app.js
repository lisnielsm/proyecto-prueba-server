const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const tasks = require('./routes/tasks');

// create de server
const app = express();

// enable cors
app.use(cors());

// connect to database
connectDB();

// enable express.json
app.use(express.json({ extended: true }));

// import routes
app.use('/api/tasks', tasks);

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
    console.log("Server created at port", port);
});