// database/controllers/jobSearcherController.js

const bcrypt = require('bcrypt');
const JobSeeker = require('../models/jobSeeker');

const createJobSearcher = async (req, res) => {
  try {
    const { firstname, lastname, email, nationality, gender, education, currentvisa, workrights, password, age } = req.body;

    // Check if the user already exists
    // const existingUser = await JobSeeker.findOne({ where: { email } });
    // if (existingUser) {
    //     console.log("User Exists")
    //   return res.status(400).json({ error: 'User already exists' });
    // }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new JobSearcher
    const newJobSearcher = await JobSeeker.create({
      firstname,
      lastname,
      email,
      nationality,
      start_age: age ? parseInt(age.split('-')[0], 10) : null,
      end_age: age ? parseInt(age.split('-')[1], 10) : null,
      gender,
      education,
      currentvisa,
      workrights,
      password: hashedPassword,
    });

    console.log(" user crveated")
    return res.status(201).json(newJobSearcher);
  } catch (error) {
    console.error('Error creating job searcher:', error);
    return res.status(500).json({ error: 'Error creating job searcher' });
  }
};

module.exports = {
  createJobSearcher,
};
