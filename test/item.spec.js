import chaiHttp from 'chai-http';
import app from '../src/index.js';
import chai from 'chai';

let expect = chai.expect;
chai.use(chaiHttp);


let req_body = 
{
	"item_type": "skjorte",
	"item_id": "1",
	"size": "55",
	"item_number": "76",
	"status": "bortkastet"
};

/*
describe('api/items listAll', () => {
  it('Returns a 200 response', (done) => {
    chai.request(app)
      .get('/api/items', req_body)
      .end((error, response) => {
        if (error) done(error);
        // Now let's check our response
        expect(response).to.have.status(200);
        done();
      });
  });
});

*/