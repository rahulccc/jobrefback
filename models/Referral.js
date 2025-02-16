// JavaScript source code
const mongoose = require('mongoose');

const ReferralSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    description: String,
    referralLink: String,
}, { timestamps: true });

module.exports = mongoose.model('Referral', ReferralSchema);
