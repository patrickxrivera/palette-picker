import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';

chai.use(chaiHttp);

describe('Client Routes', () => {
  describe('GET /api/projects', () => {
    it('should return all projects', () => {
      const route = '/api/projects';

      // const res = await chai.request(server).get(route);
      // expect(res).to.have.status(200);

      return chai
        .request(app)
        .get(route)
        .then((res) => {
          expect(res).to.have.status(200);
        });
    });
  });
});
