const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.static('public')); // Serve static files

// Temporary storage for inspections (later replace with a database)
let inspections = [];

// API endpoint to handle form submissions
app.post('/submit-inspection', (req, res) => {
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
app.get('/inspections', (req, res) => {
    res.json(inspections);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
