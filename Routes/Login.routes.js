const express = require('express');
const { loginEmployee } = require('../Controller/Login.Controller');

const router = express.Router();

router.post('/login', loginEmployee);

module.exports = router;
