const mongoose = require('mongoose')
const app = require('./app.js')
const dbDataUpload = require('./configs/db_data.js')

// MongoDB Connection String
const url = "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.nhk6lbk.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0"
const dbUser = "avi"
const dbPass = "avi10102"
const dbName = "Amazon-Backend"

const connString = url
    .replace('$_USERNAME_$', dbUser)
    .replace('$_PASSWORD_$', dbPass)
    .replace("$_DB_NAME_$", dbName)

// Connecting to MongoDB
mongoose.connect(connString)
    .then(() => {
        console.log("Database Connected")
        // dbDataUpload()
    })
    .catch(err => console.log(err))


app.listen(1010, (req, res) => {
    console.log('Server is running on port 1010');
})