require('dotenv').config();
var express = require('express');
var router = express.Router();
var queries = require('../queries/apiQueries');

//add highscore data
router.post('/', function(req, res, next){
  queries.addScore(req.body.userName, req.body.highScore)
  .then(function(data){
    console.log(data.body);
      res.json({message: data.body});
  });
});
module.exports = router;
