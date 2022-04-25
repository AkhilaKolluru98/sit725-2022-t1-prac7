
var express =require("express");
var app =express();
require("./dbConnect"); //To connect to Database
const contactRoutes=require('./routes/contactRoutes');

app.use(express.static(__dirname+'/public'))// To run the index.html as static page
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Contact Routing
app.use(contactRoutes)


var port = process.env.port || 3000;

app.listen(port,()=> {
    console.log("App running at http://localhost:"+port)
    
    
})