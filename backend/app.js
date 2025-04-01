const express = require('express');
const app = express();
// const employeRouter = require('./routes/employeRoute.js')
const menuRoute = require('./routes/menuRoute.js')
require('./db/dbConnection.js')


var cors = require('cors')

app.use(cors())

app.use(express.json());
app.use('/api',menuRoute)


app.listen(5000,()=>{
    console.log(`listening`)


})