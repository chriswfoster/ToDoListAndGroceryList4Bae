const express = require('express');
const cors = require("cors");
const {json} = require("body-parser")
const massive= require('massive')


const port = 3089;

const app = express()
app.get(cors())
app.get(json())






app.listen(port, ()=> `Your are now listening to ${port}FM!`)