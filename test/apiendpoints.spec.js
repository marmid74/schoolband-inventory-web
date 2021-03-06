import chaiHttp from 'chai-http';
import app from '../src/index.js';
import chai from 'chai';

let expect = chai.expect;
chai.use(chaiHttp);

describe('Root Route', () => {
  it('Returns a 200 response', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        if (error) done(error);
        // Now let's check our response
        expect(response).to.have.status(200);
        done();
      });
  });
});

let req_body = 
{
	"item_type": "skjorte",
	"item_id": "1",
  "item_model": "D40",
  "item_size": "40",
	"item_quality": "good",
	"item_location": "lager"
};


describe('api/items Route', () => {
  it('Returns a 200 response', (done) => {
    chai.request(app)
      .post('/api/items', req_body)
      .end((error, response) => {
        if (error) done(error);
        // Now let's check our response
        expect(response).to.have.status(200);
        done();
      });
  });
});