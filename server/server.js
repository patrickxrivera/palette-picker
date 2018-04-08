import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initApi from './routes/projectsApi';

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initApi(app);

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

export default app;
