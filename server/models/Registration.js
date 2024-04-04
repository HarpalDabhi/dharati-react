const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username:String,
    email: String,
    password:String
});

const RegisterModel = mongoose.model("registered_users",RegisterSchema);

module.exports = RegisterModel;