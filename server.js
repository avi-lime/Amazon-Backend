const mongoose = require('mongoose')
const app = require('./app.js')
const dbDataUpload = require('./configs/db_data.js')

// MongoDB Connection String
const connString = process.env.CONN
const PORT = process.env.PORT || 5000

// Connecting to MongoDB
mongoose.connect(connString)
    .then(() => {
        console.log("Database Connected")
        // dbDataUpload()
    })
    .catch(err => console.log(err))


app.listen(PORT, (req, res) => {
    console.log('Server is running on port ' + PORT);
})