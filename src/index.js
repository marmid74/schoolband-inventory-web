import express from 'express';
import chalk from 'chalk';
//var express = require('express');
import * as config from './config';

const app = express();

app.get('/', function(req, res){
    res.send({Yeah});
 });



// listen for requests
app.listen(config.port, () => {
    console.log(chalk.green(`Dev API running on port ${config.port}`));
  });
  
  export default app;