const express = require('express')
const app = express()
const mongoose = require('mongoose');
var cors = require('cors');
const { getStudent, getSingleStudent, addStudent, deleteStudent, updateStudent } = require('./controlers/studentControler');
require('dotenv').config()
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/v1/students', getStudent);
app.get('/api/v1/students/:id', getSingleStudent);
app.post('/api/v1/students', addStudent);
app.delete('/api/v1/students/:id', deleteStudent);
app.put('/api/v1/students/:id', updateStudent);

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
