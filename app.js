require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./routes");
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/", router);
app.use((err, req, res, next) =>
{
    if(err.name == "SequelizeValidationError")
        res.status(400).json(err);
    else
        res.status(500).json({error : "Internal Server Error"});
})
app.listen(PORT, () => console.log("I Love You " + PORT));