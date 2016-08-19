var knex = require('../db/knex');

module.exports ={
  findUserByUserName : function(userName){
    return knex('users').where({"userName": userName}).first();
  },
  addUser : function(body){
    return knex('users').insert(body);
  },
  getData : function(){
  return knex('users');
},
addScore : function(userName, highScore){
  return knex('users').insert({'userName': userName, 'highScore':highScore});
  },
  getOneData : function(id){
  return knex('users').where({id: id});
},
};
