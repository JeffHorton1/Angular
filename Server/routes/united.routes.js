const UnitedController = require("../contollers/united.controller")

module.exports = app => {
    app.get("/api/test", UnitedController.testResponse);
}