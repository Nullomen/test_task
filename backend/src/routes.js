const express = require('express');
const router = express.Router();
const contollers = require('./contollers.js');

router.get('/getCitizens', contollers.getCitizens);

module.exports = router;
