const express = require('express');
const app = express();
const cors = require('cors');

const auth = require('./routes/jwtAuth.js');

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/auth', auth)

app.listen(5000, () => {
  console.log('Server is running. (5000)');
})