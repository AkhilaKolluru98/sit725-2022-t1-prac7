const mongoose=require('mongoose');

//Schema for ContactForm
const ContactSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type: Number,
        required:true
    },
    message : {
        type: String,
        required:true
    }
})



//Create a collection
const Contact = new mongoose.model("Contactdetail", ContactSchema);

module.exports=Contact;
