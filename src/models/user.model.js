const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,      
    },
    mobile: {
	    type:String,
	},
    address:{
        type:String
	}
   
});

module.exports = mongoose.model('User', userSchema);