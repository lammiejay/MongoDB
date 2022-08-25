require('dotenv').config();
const express = require('express');
const router = require('./Routes/auth.route');
const app = express();



// In-Built MiddleWare

app.use(express.json()); // allows you get data from the body
app.use(express.urlencoded({extended:true}));  // allows you get data from a form

app.use(router);

app.all('*', (req, res) => {
    res.status(404).json({msg: `Route not found`}) // if they go to a route that youve not creted or an unknown one it would show this message
})






module.exports = app;