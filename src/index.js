import express from 'express';
import chalk from 'chalk';
import * as config from './config';
import items from './routes/item.routes';
import users from './routes/user.routes';
import configuniforms from './routes/configuniform.routes'
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';


const app = express();
app.server = http.createServer(app);

//connect to db
mongoose.connect(config.mongoHost);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
  })
);
app.use(morgan('combined'));


app.get('/', function(req, res){
    res.send();
 });

// Set up routes
app.use('/', items);
app.use('/', users)
app.use('/', configuniforms)

// listen for requests
app.listen(config.port, () => {
    console.log(chalk.green(`Dev API running on port ${config.port}`));
});
  
export default app;