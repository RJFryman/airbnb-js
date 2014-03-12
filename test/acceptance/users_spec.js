/* jshint expr:true */

'use strict';

process.env.DBNAME = 'airbnb-test';
var request = require('supertest');
var app = require('../../app/app');
var expect = require('chai').expect;
var User;

describe('user', function(){
  before(function(done){
    request(app)
    .get('/')
    .end(function(err, res){
      User = require('../../app/models/user');
      done();
    });
  });

  beforeEach(function(done){
    global.nss.db.dropDatabase(function(err, result){
      done();
    });
  });

  describe('GET /register', function(){
    it('should display the register page', function(done){
      request(app)
      .get('/register')
      .end(function(err, res){
        expect(res.status).to.equal(200);
        expect(res.text).to.include('Register');
        done();

      });
    });
  });
});
