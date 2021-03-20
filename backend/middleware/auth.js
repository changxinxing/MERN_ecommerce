const userModel = require('../model/user');

let auth = (req, res, next) =>{
    let token = req.cookies.user_cookie;
    userModel.findByToken(token, (err, user) =>{
        if(err) throw err;
        if(!user) return res.json({isAuth:false, error:true})
        req.token = token;
        req.user = user;
        next();
    })
}
module.exports = auth;