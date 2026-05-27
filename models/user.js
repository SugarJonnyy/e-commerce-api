const mongoose = require('mongoose')
 
const UserSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name can't be blank"],
        minlength: 5,
        maxlength: 50,

    },
    email: {
        type: String,
        required: [true, "Email can't be blank"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: 5
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: ['user']
    }
})

module.exports = mongoose.model('User', UserSchema)
