 /* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id:'ARG',
  name: 'Argentina',
  image:'url',
  continent:'America',
  capital:'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('expect to be a json', ()=>{
      agent.get('/countries').expect('Content-type',/json/)
    })
    it('expect ti return the countries',()=>{
      agent.get('/countries')
      .expect(countries=>{
        expect(countries.body[0].name).to.equal('Argentina')
        expect(countries.body[0].image).to.equal('url')
        expect(countries.body[0].continent).to.equal('America')
        expect(countries.body[0].capital).to.equal('Buenos Aires')

      })
    })
  });
  describe('GET /countries?name=id', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('expect to be a json', ()=>{
      agent.get('/countries').expect('Content-type',/json/)
    })
    it('expect to return an Error if do not match',()=>{
      agent.get('/countries?name=shkdhys')
      .expect(res=>{
        expect(404)
        expect(res.body).to.equal({msg:'The name did not match any country'})
      })
    })
    it('expect to return an Error if does noy have nothing to match',()=>{
      agent.get('/countries?name=')
      .expect(res=>{
        expect(404)
        expect(res.body).to.equal({msg:'Must have a name for a search'})
      })
    })
    it('expect to return the countries',()=>{
      agent.get('/countries?name=argentina')
      .expect(200)
      .expect(countries=>{
        expect(countries.body[0].name).to.equal('Argentina')
      })
    })
  });
  describe('GET /countries/:id', () => {
    it('expect to be a json', ()=>{
      agent.get('/countries/ARG').expect('Content-type',/json/)
    })
    it('expect to return an Error if the country did not exist',()=>{
      agent.get('/countries/ARGGG')
      .expect(res=>{
        expect(404)
        expect(res.body).to.equal({msg:'Country did not found, possibly did not exist'})
      })
    })
    it('expect to return an Error if the syntax is not allow',()=>{
      agent.get('/countries/y0=')
      .expect(res=>{
        expect(404)
        expect(res.body).to.equal({msg:'Syntax not allowed'})
      })
    })
    it('expect to return an Error if the id is not sended',()=>{
      agent.get('/countries/')
      .expect(res=>{
        expect(404)
        expect(res.body).to.equal({msg:'An id is needed'})
      })
    })
    it('expect to return the countriy',()=>{
      agent.get('/countries/ARG')
      .expect(200)
      .expect(countries=>{
        expect(countries.body[0].name).to.equal('Argentina')
      })
    })
  });
});
