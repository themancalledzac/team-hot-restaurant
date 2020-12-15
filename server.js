// Dependencies
// =============================================================
const { table } = require("console");
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Table List
const tables = [
    {
        customerName: "admin",
        customerEmail: "admin@admin.com",
        customerId: "admin",
        phoneNumber: "5555555555"
    }
];

const waitlist = [];

// ROUTES


app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post("/api/tables", function(req, res) {
    const newRes = req.body;

    if (tables.length < 5) {
        tables.push(newRes);
        
    } else {
        waitlist.push(newRes);
    }
    
});


// Listener
app.listen( PORT );