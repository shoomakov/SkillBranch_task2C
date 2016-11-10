import express from 'express';
import cors from 'cors';

import canonize from './canonize';

const splitString = require('./functions');
const url         = require('url');
const isNull      = require('lodash.isnull');
const app         = express();
const port        = 8080;

app.use(cors());

// Route for task 2B
app.get('/task2B', (req, res) => {
  const query  = req.query,
        result = query.fullname,
        parse  = url.parse(result);

    if (isNull(parse.pathname)) {
      return res.send('Invalid fullname');
    } else {
      const finishedResult = splitString(result.trim()
                                               .replace(/ +/g, ' '), ' ');
      return res.send(finishedResult);
    }
});

// Route for task 2C
app.get('/task2C', (req, res) => {
    const username = canonize(req.query.username)
    res.send(`@${username}`);
});

app.listen(port, () => {
  console.log(`Your app listening on port ${port}!`);
});
