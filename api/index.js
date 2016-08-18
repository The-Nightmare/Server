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
//add highscore data
// router.post('/', function(req, res, next){
//   console.log(req);
//   queries.addScore(req.params.userName, req.params.highscore)
//   .then(function(data){
//     console.log(data);
//       res.json({message: data});
//   });
// });
router.post('/', function(req, res, next){
  console.log(req);
});

module.exports = router;
