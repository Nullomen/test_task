const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server start app listening on port ${port}`)
});
