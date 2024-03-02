const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors')
require('dotenv').config()
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})



const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Data Base Connected')
    } catch (error) {
        console.log(error)
    }
}

connectDB().then(() => {
    app.listen(process.env.PORT)
}).catch((error) => {
    console.log(error);
})







// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`)
// })