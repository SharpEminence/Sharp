const dotenv = require('dotenv')
dotenv.config()

const app  = require("./src/app")
const DBM = require("./src/config/db")
const apiRoutes = require('./src/routes')
const csvdata = require("./CSVTOJSON/index")

const port = 5000

const DBManager = new DBM()
const data = new csvdata()
DBManager.connectToDatabase()
// data.csv()

app.use('/api/v1', apiRoutes)
app.listen(process.env.PORT || port, (err, success) => {
    if (err) return console.log(err)
    console.log(`Connected to Port ${process.env.PORT || port}`)
})


process.on("unhandledRejection", error => {
    console.log(error.message)
    console.log("-----------------------------------")
    process.exit(1)
})