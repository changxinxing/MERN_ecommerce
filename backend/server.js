const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');
const PORT = 4000;

const userModel = require("./model/user");

app.use(cors());
app.use(bodyParser.json());



app.post('/signup', (req, res) => {
    userModel.findOne({email:req.body.email}, (err, user) =>{
        if(!user){
            userModel.insertMany(req.body);
            res.status(200).send(req.body)
        }
        else{
            return res.json({
                success:false
            })
        }
    })
    
});

app.post('/login', (req, res) => {
    userModel.findOne({email:req.body.email}, (err, user) => {
        if(!user){
            return res.json({
                mailloginSuccess: false,
                message:"Wrong Email",
            })
        }
        else{
            const compare = md5(req.body.password) == user.password
            if(compare == true){
                return res.json({
                    loginSuccess: true,
                    message:"Welcome",
                    name:user.name
                })
            }
            else{
                return res.json({
                    passwordloginSuccess:false,
                    message:"Wrong Password"
                })
            }
            // user.comparePassword(req.body.password) 
        }        
    })    
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});