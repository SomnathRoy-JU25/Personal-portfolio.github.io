const mongoose = require("mongoose");

// Define the Tags schema
const contactUsSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: true,
	},
    lastname: {
		type: String,
		required: true,
	},
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
    },
    countrycode:{
        type:String,
    }	
});

// Export the Tags model
module.exports = mongoose.model("ContactUs", contactUsSchema);
