// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001; // Set the port for the server
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});


app.post('/create-account', (req, res) => {
  // Extract data from the request body
  const data = req.body;

  // Do something with the data (e.g., save it to a database)
  console.log('Received data:', data);

  // Send a response
  res.status(200).send('Data received successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});