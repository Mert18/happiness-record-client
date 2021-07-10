const express = require('express');
const app = express();
const cors = require('cors');

const auth = require('./routes/jwtAuth.js');
const data = require('./routes/data.js')
// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use('/auth', auth);
app.use('/data', data);

app.listen(5000, () => {
  console.log('Server is running. (5000)');
})