import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './router';
import db from './db';
// Create the API
const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Set the main router
app.use('/', routes);

db.connect((err) => {
  if (err) {
    console.log('Error connecting to database');
    return;
  }
  app.listen(port, () => {
    console.log(`Backend server is listening on port ${port}....`);
    console.log('press CTRL+C to stop server');
  });
  console.log('Connected to database');
});
