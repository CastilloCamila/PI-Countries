const { Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { response } = require('express');

describe('Country model testing', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    
    describe('Difficulty', () => {
      it('should throw an error if difficulty it is not 1, 2, 3, 4,or 5', (done) => {
         Activity.create({
          difficulty:'7'
        })
          .then(() => done(new Error('It requires valid values')))
          .catch(() => done());
      });
      it('should work when its a valid number', () => {
        Activity.create({ difficulty:'1' })
        .then(activity=>{
          expect(activity.difficulty).to.equal('1')})
      });
    });
    describe('Season', ()=>{
      it('Should throw an error is it is not Summer,Autum,Winter, Spring ', (done)=>{
        Activity.create({
          season:'Tuesday'
        })
          .then(() => done(new Error('It requires valid values')))
          .catch(() => done());
      })
      it('should work when season its a valid value',()=>{
        Activity.create({season:'Summer'})
        .then(activity=>{
          expect(activity.season).to.equal('Summer')
        })
      })
    })
    
  });

});
