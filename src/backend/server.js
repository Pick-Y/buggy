// backend/server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001; // Set the port for the server
const sequelize = require('./database/db.connection'); // Adjust path as necessary

const JobSearcherCreate = require('../backend/database/controllers/jobSearcherController');
const cors = require('cors');



app.use(cors());
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

app.post('API/create-account-jobsearcher', JobSearcherCreate.createJobSearcher)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});