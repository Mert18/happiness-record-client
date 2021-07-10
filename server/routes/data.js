const pool = require('../db');
const router = require('express').Router();
const authorization = require('../middleware/authorization');

router.post('/', authorization, async(req, res) => {
  try {
    const {work, leisure, game, happiness} = req.body;
    const newData = await pool.query('INSERT INTO parameters (owner_id, work, leisure, game, happiness) VALUES ($1, $2, $3, $4, $5);', [req.user, work, leisure, game, happiness]);
    res.json(newData);

  } catch (error) {
    console.error(error.message, "Data posting route.");
  }
});

module.exports = router;
