var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries');
//get highscore data
router.get('/', function(req, res, next){
  queries.getData()
  .then(function(data){
    console.log(data);
      res.json({score: data });
  });
});
router.get('/:id', function(req, res, next){
  queries.getOneData(req.params.id)
  .then(function(data){
    console.log(data);
      res.json({user: data});
  });
});

module.exports = router;
