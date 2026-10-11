const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, required: true },
    category: { type: String, required: true }, // Heritage, Nature, Religious, Adventure
    description: { type: String, required: true },
    bestTimeToVisit: { type: String, required: true },
    entryFee: { type: String, default: 'Free' },
    imageUrl: { type: String, required: true },
    nearbyAttractions: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);