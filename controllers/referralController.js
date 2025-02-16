const Referral = require('../models/Referral');

// Get all referrals
exports.getReferrals = async (req, res) => {
    try {
        const referrals = await Referral.find();
        res.json(referrals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new referral
exports.createReferral = async (req, res) => {
    const { jobTitle, company, description, referralLink } = req.body;
    try {
        const newReferral = new Referral({ jobTitle, company, description, referralLink });
        await newReferral.save();
        res.status(201).json(newReferral);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// JavaScript source code
