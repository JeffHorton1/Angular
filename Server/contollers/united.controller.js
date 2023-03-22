//import united model

const United = require("../models/united.model")

module.exports.testResponse = (req,res) =>{
    res.json({message: "Welcome to the Testing Side of The Database ! "})
}