const express = require('express');
const app = express();
const courseRoute = require('./routes/courseRoute');
const adminRoute = require('./routes/adminRoute');
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/api/v1',courseRoute);
app.use('/api/v1/admin',adminRoute);

module.exports = app;