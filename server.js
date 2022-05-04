
var express =require("express");
var app =express()
require("./dbConnect"); //To connect to Database
const contactRoutes=require('./routes/contactRoutes');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'))// To run the index.html as static page
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Contact Routing
app.use(contactRoutes)


const addNumbers = (number1, number2) => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = (num1 + num2) || null;
    return result;
}

app.get("/addTwoNumbers/:firstNumber/:secondNumber",(req,res) => {
    var number1 = req.params.firstNumber;
    var number2 = req.params.secondNumber;
    var result = addNumbers(number1,number2)
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
      }
      else { res.json({result: result, statusCode: 200}).status(200) } 
})

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    setInterval(()=>{
      socket.emit('number', new Date().toISOString());
    }, 1000);
  
  });

var port = process.env.port || 3000;

http.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
  });