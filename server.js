const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./db')

require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended : true }))
app.use(express.json())


app.use(cookieParser()) 
app.use(cors())

app.use(`/api/v1/` ,require('./routes/UserRoute'))


app.all(`*`,(req,res) => {
    res.status(404).json({ msg : `requested path not found , try '/api/v1/' `})
    // next()
})

app.listen(PORT , async() => {
    await connectDb(process.env.MONGO_URL)
    console.log(`server is started @ http://localhost:${PORT}`)
})