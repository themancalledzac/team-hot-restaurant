// |======|============|============|============|============|============|============|============|
// LOAD DATA
// Links our routes to a series of "data" sources.
// |======|============|============|============|============|============|============|============|
const list = require("../data/list");

// |======|============|============|============|============|============|============|============|
// ROUTING
// |======|============|============|============|============|============|============|============|

module.exports = function(app) {
    // API GET Requests
    // Below handles when users 'visit' a page.
    //

    app.get("/api/tables", function(req, res) {
        res.json(list);
    });

    app.post("/api/")
};