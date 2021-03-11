const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var expressLayouts = require("express-ejs-layouts");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get('/loginPost', function(req, res) {
    res.render('loginPost',{data:result})
});
app.use((error, req, res, next) => {
    console.log(req)
    console.error(error)
    res.status(error.statusCode || 500).json({message: error.message})
})

module.exports = app