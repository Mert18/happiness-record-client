const pool = require('../db');
const router = require('express').Router();

router.post('/', async(req, res) => {
  const {work, leisure, game, happiness} = req.body;
  
})

module.exports = router;
