import express from 'express';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/api', router);

console.log('ENV VAR: ', process.env.EVENTBRITE_BASE_URL)


app.listen(8080, () => {
    console.log('server listening on port 8080');
});
