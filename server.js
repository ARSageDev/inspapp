const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary storage for inspections (Replace with a database later)
let inspections = [];

// API endpoint to handle form submissions
app.post('/api/submit-inspection', (req, res) => {
    const { customerName, address } = req.body;

    if (!customerName || !address) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const inspection = { id: inspections.length + 1, customerName, address };
    inspections.push(inspection);

    console.log("New Inspection Saved:", inspection);
    res.json({ message: "Inspection scheduled successfully!", inspection });
});

// API endpoint to get all inspections
app.get('/api/inspections', (req, res) => {
    res.json(inspections);
});

// Export as a serverless function for Vercel
module.exports = app;
