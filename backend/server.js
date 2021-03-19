const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const md5 = require('md5');
const PORT = 4000;
var jwt = require('jsonwebtoken');

const userModel = require("./model/user");
const auth = require('./middleware/auth');

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());


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
                user.generateToken((err, user) => {
                    if(err) return res.status(400).send(err);
                    res.cookie("user_cookie", user.token, { httpOnly: false, secure: false })
                    .status(200).json({
                        loginSuccess: true,
                        message:user.token,
                        name:user.name
                    })
                })
                // user.token = jwt.sign(user.name, "shhhh");
                // res.cookie("user", user.token).status(200).json({
                //     loginSuccess: true,
                //     message:user.token,
                //     name:user.name
                // })                            
            }
            else{
                return res.json({
                    passwordloginSuccess:false,
                    message:"Wrong Password"
                })
            }
            //user.comparePassword(req.body.password) 
        }        
    }) 
     
})

app.get('/auth', auth,  (req, res) =>{
    res.status(200).json({
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email,
        password:req.user.password
    })
})
app.post('/edit', (req,res) => {
    
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});