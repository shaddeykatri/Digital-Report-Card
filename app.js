
const express = require("express")
const mongoose = require('mongoose')
const app = express()
const env = require('dotenv').config()


app.use(express.static("public"))

// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser:true,
//     useUnifiedTopology : true
// })
// const con = mongoose.connection

// con.on('open', () => {
//     console.log('database connected...')
// })


// app.use(express.json())

// const questionRouter = require('./routes/reportRoutes')
// app.use('/report',reportRouter)

app.get("/", function (req, res) {
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));