const Destination = require('../models/Destination');

// @desc    Get all destinations (supports filtering by state)
// @route   GET /api/destinations
exports.getDestinations = async (req, res) => {
    try {
        const { state } = req.query;
        const filter = state ? { state: new RegExp(state, 'i') } : {};
        const destinations = await Destination.find(filter);
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get single destination by ID
// @route   GET /api/destinations/:id
exports.getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) return res.status(404).json({ message: 'Destination not found' });
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add a new destination (Admin)
// @route   POST /api/destinations
exports.createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);
        res.status(201).json(destination);
    } catch (error) {
        // This will print the actual error to your terminal
        console.error("Error creating destination:", error); 
        // This sends the actual error message back to Postman
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};