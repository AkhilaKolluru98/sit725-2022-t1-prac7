const express= require ('express');
const router=express.Router();
const contactController=require('../controller/contactController');

router.get("/", contactController.contact_details_get);
//Post function to add contact form data to database
router.post("/", contactController.contact_details_post);
    

module.exports=router;