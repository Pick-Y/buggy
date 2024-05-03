// backend/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001; // Set the port for the server
const cors = require('cors');

app.use(cors());
// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});