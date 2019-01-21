import app from './app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';


chai.use(chaiHttp);
const expect = chai.expect;

describe('API Request', () => {
  it('should return User name or language not provided!', async () => {
    return chai.request(app).get('/')
      .then(res => {
        chai.expect(res.text).to.eql('User name or language not provided!')
      })
  })
})