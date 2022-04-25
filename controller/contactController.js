const Contact=require('../models/contact');

const contact_details_get= (req,res)=> {
    res.sendFile(__dirname+'/public');
}
const contact_details_post=(req,res)=> {
    try{
        const getDetails = new Contact({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            message:req.body.message
        })
        getDetails.save();
        res.redirect('/');
        
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports= {
    contact_details_get,
    contact_details_post
}