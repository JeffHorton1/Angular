const express = require("express");
const app = express();
const port = 8000;
// const cors = require("cors");

// app.get("/api/test", (req, res) => {
//     res.json(message:"Hey Its Me!")
// })

require("./Server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./Server/routes/united.routes")(app);

app.listen(port, ()=> console.log(`running on port ${port}`));

