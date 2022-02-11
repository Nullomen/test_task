const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const routes = require('./src/routes.js');

const app = express();
const port = 8080;

app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server start app listening on port ${port}`)
});
