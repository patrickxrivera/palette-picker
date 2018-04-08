const initApi = (app) => {
  app.get('/api/projects', (req, res) => {
    res.send({ hi: 'there' });
  });
};

export default initApi;
