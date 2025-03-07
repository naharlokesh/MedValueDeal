const express = require('express');
const app=express();
const medicine_details = require('./routes/Medicine');
const labtest_details = require('./routes/LabTest');
const cors = require('cors');
const ConnectDB = require('./db/connect')
require('dotenv').config()


const PORT = 5000
app.use(express.static('./public'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})


app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/api/v1/medicine',medicine_details)
app.use('/api/v1/labtest',labtest_details)

// app.get('/api/v1/medicine/all', (req, res) => {
//     res.json(medicines); // Assuming medicines is your array of medicine objects
// })


const start = async()=>{
    try {
        await ConnectDB(process.env.MONGO_URI)
        app.listen(PORT , (req,res)=>{
            console.log("Server is Listening at port 5000...........")
        })
    } catch (error) {
        console.log(error)
    }
}

start()