const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/united_health_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log("Connected to Mongo Database"))
    .catch(err=>console.log("Connection", err))