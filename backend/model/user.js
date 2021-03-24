const mongoose =  require('../services/mongoose').mongoose;
const md5 = require('md5');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
        name: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
            minlength: 5
        },
        token: {
            type: String
        },
        role: {
            type: Number,
            default: 0
        }   
    },
    {
        collection: "userlists",
    }
)
userSchema.methods.comparePassword = function(plainPassword) {
    const compare = md5(plainPassword) == this.password;
    if(compare == false) {console.log("Wrong Password")
}
    else {
        console.log("Welcome  " + this.name + "!")}
    
}
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token;
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}
userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    jwt.verify(token, 'secretToken', function(err, decoded) {
        user.findOne({"_id":decoded, "token":token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}
module.exports = mongoose.model("userSchema", userSchema);
