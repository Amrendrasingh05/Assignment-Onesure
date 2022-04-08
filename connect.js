const express = require("express")
const cors = require("cors")
const e = require("cors");
const helmet = require("helmet")
const morgan = require("morgan")

const app = express();

app.use(cors())
app.use(helmet())
app.use(morgan())

app.use(express.json())


const loginrouter=require("./routes/route");
app.use('/route',loginrouter)


const port = process.env.port || 5000

app.listen(port)
console.log("server is running")


app.get("/test", (req, res) => {
    res.json("server is running on 5000")
})

app.use("*", (req, res, next) => {

        res.json({message:"no such files"})
})
