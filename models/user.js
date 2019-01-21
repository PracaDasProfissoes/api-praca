const userSchema = require('./user');
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true,
    },
    'type': {
        type: String,
        required: true,
        enum: ['ADMIN','USER','SECRETARY']
    },
    'password': {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

userSchema.pre('save',async function(next) {
    if(this.password) {
        const hash = await bcrypt.hash(this.password,10);
        this.password = hash;
        next();
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;