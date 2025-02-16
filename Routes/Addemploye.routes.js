const express = require('express');
const { addEmployee } = require('../Controller/Addemploye.Controller');

const router = express.Router();

router.post('/add-employee', addEmployee);

module.exports = router;
